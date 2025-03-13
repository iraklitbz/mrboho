interface BasketItem {
    quantity: number;
    unit_price: number;
    product_id: string;
}
export default async (orderID: string, totalPrice: number, basket: BasketItem[]) => {
    try {
        const { data, error } = await useFetch('/api/create-order', {
            method: 'POST',
            body: {
                orderID,
                totalPrice,
                basket
            }
        })
        if (error.value) {
            console.error(error.value)
            return null
        }
        return data.value
    } catch (err) {
        console.error('Error al realizar el pedido:', err)
        return null
    }
}
