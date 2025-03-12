const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    const { totalPrice, basket } = await readBody(event)
    const orderID = Date.now().toString()
    const apiUrl = config.BANK_API_URL
    const baseURL = config.public.NUXT_PUBLIC_BASE_URL
    const requestData = {
        callback_url: `${baseURL}/checkout`,
        external_order_id: orderID,
        purchase_units: {
            currency: 'GEL',
            total_amount: totalPrice,
            basket: basket
        },
        redirect_urls: {
            fail: `${baseURL}/checkout`,
            success: `${baseURL}/checkout`
        }
    }
    return await $fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept-Language': 'ka',
            'Authorization': `Bearer ${config.BANK_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
})
