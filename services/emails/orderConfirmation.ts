import type { UserOrderForm, UserOrderItem } from '~/types/local-types'
export function orderConfirmationEmailTemplate(user: UserOrderForm, products: UserOrderItem[], total: string, orderID: string): string {
    const productItems = products.map(p => `
      <tr>
        <td style="padding: 10px 20px 10px 0;">
          <img alt="${p.name}" src="${p.imageUrl}" width="100" height="56" style="display: block; max-width: 100px; height: auto;">
        </td>
        <th style="text-align: left; color: #333333; font-size: 14px; padding: 10px 0;">${p.name}</th>
        <th style="text-align: left; color: #333333; font-size: 14px; padding: 10px 0;">Qty: ${p.quantity}</th>
        <th style="text-align: right; color: #333333; font-size: 14px; padding: 10px 0;">${p.price}</th>
      </tr>
    `).join('');

    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
      <table align="center" width="600" style="background-color: #ffffff; border-collapse: collapse; margin: 20px auto;">
        <tr>
          <td style="padding: 20px;">
            <h1 style="color: #333333; font-size: 34px; font-weight: bold; margin: 0; text-align: center">MR BOHO</h1>
            <h3 style="color: #333333; font-size: 16px; margin: 0; text-align: center">GEORGIA</h3>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <p style="color: #666666; font-size: 16px; margin: 10px 0;">Hello ${user.name}, your order <b>#${orderID}</b> has been confirmed.</p>
            <p style="color: #666666; font-size: 16px; margin: 10px 0;">You can see the items that have been sent to you below. Thanks for shopping with us!</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h2 style="color: #333333; font-size: 20px; margin: 0;">Order No. ${orderID}</h2>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">Placed on ${new Date().toLocaleDateString()}</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom:1px solid #dadada"></td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h3 style="color: #333333; font-size: 18px; margin: 0;">Shipping to:</h3>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">${user.name} ${user.surname}</p>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">${user.address}</p>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">${user.city}, Georgia</p>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">${user.phone}</p>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">${user.email}</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom:1px solid #dadada"></td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h3 style="color: #333333; font-size: 18px; margin: 0;">Your order:</h3>
            <table width="100%" style="border-collapse: collapse; margin-top: 10px;">
              ${productItems}
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom:1px solid #dadada"></td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: right">
            <p style="color: #333; font-size: 18px; margin: 5px 0; font-weight: bold">Total: ${total}</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom:1px solid #dadada"></td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h3 style="color: #333333; font-size: 18px; margin: 0;">Need Assistance? Contact us.</h3>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;">
              We'll do everything we can to make sure you have a great experience with us. Email us: <a href="mailto:hi@mrboho.ge" style="color: #007bff;">hi@mrboho.ge</a>
            </p>
            <p style="color: #666666; font-size: 14px; margin: 10px 0;">This email was sent by MR BOHO GEORGIA</p>
            <p style="color: #666666; font-size: 14px; margin: 5px 0;"><a  style="color: #007bff;" target="_blank" href="https://www.mrboho.ge">www.mrboho.ge</a></p>
          </td>
        </tr>
      </table>
      </body>
      </html>
    `;
}

