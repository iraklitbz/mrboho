import type { UserOrderForm, UserOrderItem } from '~/types/local-types'
export function orderEmailTemplate(user: UserOrderForm, products: UserOrderItem[], total: string): string {
    const productItems = products.map(p => `
        <tr>
            <th><img alt="${p.name}" src="${p.imageUrl}" /></th> 
            <th>${p.name}</th> 
            <th>${p.quantity}</th>
        </tr>
    `).join('');
    return `
        <h3>Client:</h3>
        <ul>
            <li><b>Full name:</b> ${user.name} ${user.surname}</li>
            <li><b>Email:</b> ${user.email}</li>
            <li><b>Address:</b> ${user.address}, ${user.city}</li>
            <li><b>Phone:</b> ${user.phone}</li>
            <li><b>Additional info:</b> ${user.additional || 'N/A'}</li>
        </ul>
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
