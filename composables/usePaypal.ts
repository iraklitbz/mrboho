import type {UserOrderForm} from "~/types/local-types";

interface BasketItem {
    quantity: number;
    unit_price: number;
    product_id: string;
}

export const createPaypalOrder = async (orderID: string, totalPrice: number, basket: BasketItem[], shippingAddress: UserOrderForm) => {
    try {
        const { data, error } = await useFetch('/api/create-paypal-order', {
            method: 'POST',
            body: {
                orderID,
                totalPrice,
                basket,
                shippingAddress
            }
        });

        if (error.value) {
            console.error(error.value);
            return null;
        }

        return data.value
    } catch (err) {
        console.error('Error al crear orden PayPal:', err);
        return null;
    }
};
