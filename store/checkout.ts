import type {
    UserOrderForm,
    CartProduct
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

    return {
        userOrderForm,
        loading,
        error,
        errorPayment,
        handleCheckoutForm
    }
})
