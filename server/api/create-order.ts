const config = useRuntimeConfig();

async function getBankToken() {
    const clientID = config.BANK_PUBLIC_KEY;
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
    const { orderID, totalPrice, basket } = await readBody(event)
    const apiUrl = config.BANK_API_URL
    const baseURL = config.public.NUXT_PUBLIC_BASE_URL

    const token = await getBankToken()
    console.log(token)

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
});
