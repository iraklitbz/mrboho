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
import createOrder from '@/composables/useSendOrder'
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
    const discount = ref<DiscountCodeState>({
        valid: false,
        message: null,
        discount: [],
    })
    const totalPrice = ref('')
    async function handleCheckoutForm(products: any, total: string) {
        errorPayment .value = false
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const nanoid = customAlphabet(alphabet, 10);
        const orderID = `MR-${nanoid()}`
        const orderProducts = products.map((product: CartProduct) => ({
            name: product?.product?.name,
            slug: product?.product?.slug,
            productID: product?.product?.sys?.id,
            quantity: product?.total,
            price: currencyFormat(product?.product?.price as number),
            imageUrl: product.product?.imagesCollection?.items[0]?.url || "default-image-url"
        }))

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
                        status: 'pending'
                    }
                ] as any)

            if (orderError) {
                console.error('Error al crear la orden:', orderError.message)
                return
            }
            await handleCheckoutPayment(orderID, products, total)
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
    async function handleValidateDiscount(code: string) {
        const { data, error } = await supabase
            .from('discount_codes')
            .select('*')
            .eq('code', code)
            .single() as { data: DiscountCode | null, error: any };

        if (error || !data) {
            discount.value = {
                valid: false,
                message: 'Código no encontrado',
                discount: [],
            };
            return;
        }

        const now = new Date();
        const expirationDate = data.expiration_date ? new Date(data.expiration_date) : null;
        if (!data.active) {
            discount.value = {
                valid: false,
                message: 'Este código no está activo',
                discount: [],
            };
            return;
        }

        if ((data.current_usage ?? 0) >= (data.max_usage ?? 0)) {
            discount.value = {
                valid: false,
                message: 'Código agotado',
                discount: [],
            };
            return;
        }

        if (expirationDate && expirationDate < now) {
            discount.value = {
                valid: false,
                message: 'Código expirado',
                discount: [],
            };
            return;
        }

        const isAlreadyApplied = discount.value.discount.some(d => d.code === code);

        if (isAlreadyApplied) {
            discount.value = {
                valid: false,
                message: 'Este código ya está añadido, no puedes aplicarlo otra vez.',
                discount: discount.value.discount,
            };
            return;
        }

        if (discount.value.discount.length === 0) {
            discount.value = {
                valid: true,
                message: 'Descuento aplicado correctamente',
                discount: [data],
            };
            discountInput.value = ''
            return;
        }

        const hasNonSharableDiscount = discount.value.discount.some(d => !d.canBeShared);

        if (hasNonSharableDiscount) {
            discount.value = {
                valid: false,
                message: 'No puedes compartir este descuento con otro.',
                discount: discount.value.discount,
            };
            return;
        }

        const allExistingAreSharable = discount.value.discount.every(d => d.canBeShared);

        if (allExistingAreSharable && !data.canBeShared) {
            discount.value = {
                valid: false,
                message: 'No puedes compartir este descuento con otro.',
                discount: discount.value.discount,
            };
            return;
        }
        discount.value = {
            valid: true,
            message: 'Descuento aplicado correctamente',
            discount: [...discount.value.discount, data],
        };
        discountInput.value = ''
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
        discountInput,
        discount,
        error,
        errorPayment,
        handleCheckoutForm,
        handleRemoveDiscount,
        handleValidateDiscount
    }
})
