import type {
    UserOrderForm,
    UserOrderItem,
    CartProduct
} from '~/types/local-types'
import { orderEmailTemplate } from '~/services/emails/order'
import { orderConfirmationEmailTemplate } from '~/services/emails/orderConfirmation'
import { customAlphabet } from 'nanoid'
export const useCheckoutStore = defineStore('checkoutData', () => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const userOrderForm = ref<UserOrderForm>({
        name: '',
        email: '',
        surname: '',
        address: '',
        city: '',
        region: '',
        phone : '',
        additional: ''
    })
    const loading = ref(false)
    const error = ref(false)

    async function handleCheckoutForm(products: any, total: string) {
        const orderProducts = products.map((product: CartProduct) => ({
            name: product?.product?.name,
            slug: product?.product?.slug,
            quantity: product?.total,
            imageUrl: product.product?.imagesCollection?.items[0]?.url || "default-image-url"
        }))
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const nanoid = customAlphabet(alphabet, 10);
        const orderID = `MR-${nanoid()}`
        const { data: orderData, error: orderError } = await supabase
            .from('orders')
            .insert([
                {
                    name: userOrderForm.value.name,
                    email: userOrderForm.value.email,
                    surname: userOrderForm.value.surname,
                    address: userOrderForm.value.address,
                    city: userOrderForm.value.city,
                    region: userOrderForm.value.region,
                    phone: userOrderForm.value.phone,
                    info_adicional: userOrderForm.value.additional,
                    total_price: total,
                    products: JSON.stringify(orderProducts),
                    order_id: orderID
                }
            ] as any)

        if (orderError) {
            console.error('Error al crear la orden:', orderError.message)
            return
        }
        await handleSendEmail(orderProducts, total)
        await handleSendConfirmationEmailUser(orderProducts, total, orderID)
        router.push('/thanks')
    }
    async function handleSendEmail(orderProducts: UserOrderItem[]  , total: string) {
        loading.value = true;
        error.value = false;
        let msg = {
            from: 'web@mrboho.ge',
            to: 'georgia@mrboho.ge',
            subject:  `New order from ${userOrderForm.value.email}`,
            html: orderEmailTemplate(userOrderForm.value, orderProducts, total)
        }
        const { data } = await useFetch("/api/order-success-email", {
            method: "POST",
            body: msg
        });
        if(data) {
            loading.value = false;
            navigateTo("/thankyou")
        } else {
            error.value = true;
            loading.value = false;
        }
    }
    async function handleSendConfirmationEmailUser(orderProducts: UserOrderItem[]  , total: string, orderID: string) {
        loading.value = true;
        error.value = false;
        let msg = {
            from: 'orders@mrboho.ge',
            to: userOrderForm.value.email,
            subject:  `Your order ${orderID}`,
            html: orderConfirmationEmailTemplate(userOrderForm.value, orderProducts, total, orderID)
        }
        const { data } = await useFetch("/api/order-success-email", {
            method: "POST",
            body: msg
        });
        if(data) {
            loading.value = false;
            navigateTo("/thankyou")
        } else {
            error.value = true;
            loading.value = false;
        }
    }

    return {
        userOrderForm,
        loading,
        error,
        handleCheckoutForm,
    }
})
