import type {UserOrderForm} from "~/types/local-types";

export async function getExchangeRate() {
    try {
        const response = await $fetch('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json');

        if (!Array.isArray(response) || response.length === 0) {
            throw new Error('Formato de respuesta inesperado');
        }


        const currencies = response[0]?.currencies;

        if (!Array.isArray(currencies)) {
            throw new Error('No se encontró el array de monedas');
        }

        const euroData = currencies.find((item: any) => item.code === 'EUR');

        return euroData ? euroData.rate : null;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}

async function convertToEuro(lari: number, exchangeRate: number): Promise<number> {
    return parseFloat((lari / exchangeRate).toFixed(2));
}
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    try {
        const {
            orderID,
            totalPrice,
            basket,
            shippingAddress: UserOrderForm
        }: {
            orderID: string;
            totalPrice: number;
            basket: any[];
            shippingAddress: UserOrderForm
        } = await readBody(event);
        const paypalClientId = config.PAYPAL_CLIENT;
        const paypalSecret = config.PAYPAL_SECRET;
        const paypalApiUrl = config.PAYPAL_API_URL;
        const baseURL = config.public.NUXT_PUBLIC_BASE_URL;
        const exchangeRate = await getExchangeRate();
        if (!exchangeRate) {
            throw new Error('No se pudo obtener la tasa de cambio');
        }
        const totalPriceInEuro = await convertToEuro(totalPrice, exchangeRate);
        const auth = Buffer.from(`${paypalClientId}:${paypalSecret}`).toString('base64');
        const authResponse = await $fetch<{ access_token: string }>(`${paypalApiUrl}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials'
            })
        });

        const accessToken = authResponse.access_token;

        return await $fetch(`${paypalApiUrl}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [{
                    reference_id: orderID,
                    amount: {
                        currency_code: 'EUR',
                        value: totalPriceInEuro.toFixed(2)
                    },
                    description: `Compra en MrBoho - Orden ${orderID}`,
                    shipping: {
                        name: {
                            full_name: `${UserOrderForm.name} ${UserOrderForm.surname}`
                        },
                        address: {
                            address_line_1: UserOrderForm.address,
                            admin_area_2: UserOrderForm.city,
                            address_line_2: UserOrderForm.additional,
                            country_code: 'GE'
                        }
                    }
                }],
                application_context: {
                    brand_name: 'MrBoho',
                    landing_page: 'NO_PREFERENCE',
                    user_action: 'PAY_NOW',
                    shipping_preference: 'SET_PROVIDED_ADDRESS',
                    return_url: `${baseURL}/api/paypal-callback?order=${orderID}`,
                    cancel_url: `${baseURL}/fail-order`
                }
            })
        })
    } catch (error) {
        console.error("Error in PayPal order creation:", error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Error creating PayPal order'
        });
    }
});
