import type {
    OrderSuperbase
} from '~/types/local-types'
import {cartStore} from "~/store/cart";
export const useMeStore = defineStore('meData', () => {
    const supabase = useSupabaseClient()
    const products = ref([])
    const orderByReference = ref<OrderSuperbase | null>(null)
    const fetchProducts = async (email: string) => {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('email', email)

            if (error) {
                console.error('Supabase error:', error)
                return
            }

            products.value = data || []
        } catch (err) {
            console.error('Error fetching products:', err)
        }
    };
    const fetchOrderReference = async (orderID: string) => {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('order_id', orderID)
                .single()

            if (error) {
                console.error('Supabase error:', error)
                return
            }
            orderByReference.value = data || []
            cartStore().resetCart()

        } catch (err) {
            console.error('Error fetching products:', err)
        }
    };
    return {
        products,
        orderByReference,
        fetchProducts,
        fetchOrderReference
    }
})
