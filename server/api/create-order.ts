const config = useRuntimeConfig();

async function getBankToken() {
    const clientID = config.BANK_CLIENT_ID;
    const secretKey = config.BANK_SECRET_KEY;
    const base64Credentials = btoa(`${clientID}:${secretKey}`);
    const tokenEndpoint = 'https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token';

    const postData = new URLSearchParams();
    postData.append('grant_type', 'client_credentials');

    try {
        const response = await $fetch<{ access_token: string, expires_in: number }>(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64Credentials}`,
            },
            body: postData
        });

        return response.access_token;
    } catch (error) {
        console.error('Error obteniendo el token:', error);
        throw new Error('No se pudo obtener el token');
    }
}

export default defineEventHandler(async (event) => {
    try {
        const { orderID, totalPrice, basket } = await readBody(event)
        const apiUrl = config.BANK_API_URL
        const baseURL = config.public.NUXT_PUBLIC_BASE_URL
        const token = await getBankToken()
        const requestData = {
            callback_url: 'https://297c-88-12-201-144.ngrok-free.app/api/payment-callback',
            external_order_id: orderID,
            purchase_units: {
                currency: 'GEL',
                total_amount: totalPrice,
                basket: basket
            },
            redirect_urls: {
                fail: 'https://297c-88-12-201-144.ngrok-free.app/fail-order',
                success: `https://297c-88-12-201-144.ngrok-free.app/success-order?order=${orderID}`
            }
        };

        return await $fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept-Language': 'ka',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
    } catch (error) {
        console.error("Error in processing the request:", error);
        throw new Error("An error occurred while processing the request.");
    }
});
