import type {
    UserOrderForm,
    CartProduct,
    DiscountCode,
    DiscountCodeState
} from '~/types/local-types'
interface PaymentData {
    _links?: {
        redirect?: {
            href?: string;
        };
    };
}
import {cartStore} from "~/store/cart"
import createOrder from '@/composables/useSendOrder'
import {createPaypalOrder} from '@/composables/usePaypal'
import { customAlphabet } from 'nanoid'
export const useCheckoutStore = defineStore('checkoutData', () => {
    const supabase = useSupabaseClient()
    const userOrderForm = ref<UserOrderForm>({
        name: '',
        email: '',
        surname: '',
        address: '',
        city: '',
        phone : '',
        additional: '',
    })
    const loading = ref(false)
    const error = ref(false)
    const errorPayment = ref(false)
    const discountInput = ref('')
    const paymentMethod = ref<'bank' | 'paypal' | null>(null)
    const loadingStates = reactive({
        bank: false,
        paypal: false
    })
    const discount = ref<DiscountCodeState>({
        valid: false,
        message: null,
        discount: [],
    })
    const totalPrice = ref('')

    const finalPrice = computed(() => {
        let total = cartStore().cartTotalPrice

        if (discount.value.valid && discount.value.discount.length > 0) {
            let totalPercentage = 0;
            let totalFixedDiscount = 0;

            discount.value.discount.forEach(d => {
                if (d.type === 'percentage') {
                    totalPercentage += d.amount ?? 0;
                } else if (d.type === 'fix') {
                    totalFixedDiscount += d.amount ?? 0;
                }
            });

            if (totalPercentage > 0) {
                total -= total * (totalPercentage / 100);
            }
            if (totalFixedDiscount > 0) {
                total -= totalFixedDiscount;
            }
        }

        return total.toFixed(2);
    });
    async function handleCheckoutForm(products: any, total: string, method: 'bank' | 'paypal') {
        paymentMethod.value = method;
        console.log(method)
        loadingStates[method] = true;
        errorPayment.value = false;

        try {
            const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const nanoid = customAlphabet(alphabet, 10);
            const orderID = `MR-${nanoid()}`;

            const orderProducts = products.map((product: CartProduct) => ({
                name: product?.product?.name,
                slug: product?.product?.slug,
                productID: product?.product?.sys?.id,
                quantity: product?.total,
                price: currencyFormat(product?.product?.price as number),
                imageUrl: product.product?.imagesCollection?.items[0]?.url || "default-image-url"
            }));

            const appliedDiscounts = discount.value.discount.map(d => d.code).join(', ') || null;

            const { data: orderData, error: orderError } = await supabase
                .from('orders')
                .insert([
                    {
                        name: userOrderForm.value.name,
                        email: userOrderForm.value.email,
                        surname: userOrderForm.value.surname,
                        address: userOrderForm.value.address,
                        city: userOrderForm.value.city,
                        phone: userOrderForm.value.phone,
                        info_adicional: userOrderForm.value.additional,
                        total_price: total,
                        products: JSON.stringify(orderProducts),
                        order_id: orderID,
                        status: 'pending',
                        discount: appliedDiscounts,
                        payment: method
                    }
                ] as any);

            if (orderError) {
                console.error('Error al crear la orden:', orderError.message);
                return;
            }

            if (method === 'bank') {
                await handleCheckoutPayment(orderID, products, total);
            } else if (method === 'paypal') {
                await handlePaypalPayment(orderID, products, total);
            }
        } catch (error) {
            console.error('Error durante el checkout:', error);
            errorPayment.value = true;
        } finally {
            loadingStates[method] = false;
        }
    }
    async function handleCheckoutPayment(orderID: string, products: any, total: string) {
            errorPayment .value = false
            const basket = products.map((product: CartProduct) => ({
                quantity: product?.total,
                unit_price: product?.product?.price,
                product_id: product?.product?.sys.id
            }))
            totalPrice.value = total
            const totalToNumber = parseFloat(total.replace(/[^\d.-]/g, '').replace(',', ''))
            const paymentData = await createOrder(orderID, totalToNumber, basket) as any
            if (!paymentData) {
                errorPayment.value = true
                return;
            }
            if (paymentData && paymentData._links?.redirect?.href) {
                window.location.href = paymentData._links.redirect.href;
            } else {
                errorPayment.value = true;
            }
        }
    async function handlePaypalPayment(orderID: string, products: any, total: string) {
        try {
            const totalToNumber = parseFloat(total.replace(/[^\d.-]/g, '').replace(',', ''));
            const basket = products.map((product: CartProduct) => ({
                quantity: product?.total,
                unit_price: product?.product?.price,
                product_id: product?.product?.sys.id
            }));

            const paymentData: any = await createPaypalOrder(orderID, totalToNumber, basket, userOrderForm.value);

            if (paymentData && paymentData.links) {
                const approvalLink = paymentData.links.find((link: any) => link.rel === 'approve');
                if (approvalLink) {
                    window.location.href = approvalLink.href;
                } else {
                    errorPayment.value = true
                }
            } else {
                errorPayment.value = true
            }
        } catch (err) {
            console.error('Error en el pago con PayPal:', err);
            errorPayment.value = true
        }
    }
    async function handleValidateDiscount(code: string) {
        const { data, error } = await supabase
            .from('discount_codes')
            .select('*')
            .eq('code', code)
            .single() as { data: DiscountCode | null, error: any };

        if (error || !data) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'დისკონტო კოდი არ მოიძებნა',
                discount: [...discount.value.discount],
            };
            return;
        }

        const now = new Date();
        const expirationDate = data.expiration_date ? new Date(data.expiration_date) : null;

        if (!data.active) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'ამ კოდს არ აქვს მოქმედება',
                discount: [...discount.value.discount],
            };
            return;
        }

        if ((data.current_usage ?? 0) >= (data.max_usage ?? 0)) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'დისკონტო კოდი ამოწურულია',
                discount: [...discount.value.discount],
            };
            return;
        }

        if (expirationDate && expirationDate < now) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'დისკონტო კოდი გაუვიდა',
                discount: [...discount.value.discount],
            };
            return;
        }

        const isAlreadyApplied = discount.value.discount.some(d => d.code === code);

        if (isAlreadyApplied) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'ეს დისკონტო კოდი უკვე დაემატა, ვერ გამოიყენებ მას კიდევ ერთხელ',
                discount: [...discount.value.discount],
            };
            return;
        }

        // Resto de la lógica permanece igual...
        if (discount.value.discount.length === 0) {
            discount.value = {
                valid: true,
                message: 'დისკონტო სწორად დაემატა',
                discount: [data],
            };
            discountInput.value = '';
            return;
        }

        const hasNonSharableDiscount = discount.value.discount.some(d => !d.canBeShared);

        if (hasNonSharableDiscount) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'არ შეგიძლია ამ დისკონტო სხვა ვერსიასთან გაზიარება',
                discount: [...discount.value.discount],
            };
            return;
        }

        const allExistingAreSharable = discount.value.discount.every(d => d.canBeShared);

        if (allExistingAreSharable && !data.canBeShared) {
            discount.value = {
                valid: discount.value.discount.length > 0,
                message: 'არ შეგიძლია ამ დისკონტო სხვა ვერსიასთან გაზიარება',
                discount: [...discount.value.discount],
            };
            return;
        }

        discount.value = {
            valid: true,
            message: 'დისკონტო სწორად დაემატა',
            discount: [...discount.value.discount, data],
        };
        discountInput.value = '';
    }
    function handleRemoveDiscount(index: number) {
        if (!discount.value?.discount) return;

        const updatedDiscounts = discount.value.discount.filter((_, i) => i !== index);
        discount.value = {
            valid: updatedDiscounts.length > 0,
            message: updatedDiscounts.length > 0 ? null : 'No hay descuentos aplicados',
            discount: updatedDiscounts,
        };
    }
    return {
        userOrderForm,
        loading,
        paymentMethod,
        discountInput,
        discount,
        error,
        errorPayment,
        finalPrice,
        handleCheckoutForm,
        handleRemoveDiscount,
        handleValidateDiscount
    }
})
