export const useMeStore = defineStore('meData', () => {
    const supabase = useSupabaseClient()
    const products = ref([])

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
    return {
        products,
        fetchProducts,
    }
})
