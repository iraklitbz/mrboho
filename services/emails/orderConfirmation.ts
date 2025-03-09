import type { UserOrderForm, UserOrderItem } from '~/types/local-types'
export function orderConfirmationEmailTemplate(user: UserOrderForm, products: UserOrderItem[], total: string, orderID: string): string {
    const productItems = products.map(p => `
        <tr>
            <th><img alt="${p.name}" src="${p.imageUrl}" /></th> 
            <th>${p.name}</th> 
            <th>${p.quantity}</th>
        </tr>
    `).join('');
    return `
        <h3>Hello, ${user.name} ${user.surname}, thank you for your recent order ${orderID}. It was successfully processed and we will send it to you as soon as possible. Thank you!</h3>
        <h3>Order Details:</h3>
        <table>
            <thead>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
            </thead>
            ${productItems}
        </table>
        <h2>Total: <b>${total}</b></h2>
    `;
}
