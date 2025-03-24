import type {OrderSuperbase, UserOrderForm, UserOrderItem} from "~/types/local-types";
interface CustomError {
    statusCode: number;
    message: string;
}
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import {orderEmailTemplate} from "~/services/emails/order";
import {orderConfirmationEmailTemplate} from "~/services/emails/orderConfirmation";

const config = useRuntimeConfig();
const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
);

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4RUyAw3+CdkS3ZNILQh
zHI9Hemo+vKB9U2BSabppkKjzjjkf+0Sm76hSMiu/HFtYhqWOESryoCDJoqffY0Q
1VNt25aTxbj068QNUtnxQ7KQVLA+pG0smf+EBWlS1vBEAFbIas9d8c9b9sSEkTrr
TYQ90WIM8bGB6S/KLVoT1a7SnzabjoLc5Qf/SLDG5fu8dH8zckyeYKdRKSBJKvhx
tcBuHV4f7qsynQT+f2UYbESX/TLHwT5qFWZDHZ0YUOUIvb8n7JujVSGZO9/+ll/g
4ZIWhC1MlJgPObDwRkRd8NFOopgxMcMsDIZIoLbWKhHVq67hdbwpAq9K9WMmEhPn
PwIDAQAB
-----END PUBLIC KEY-----`;

const verifySignature = (signature: string, body: any): boolean => {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(JSON.stringify(body));
    return verify.verify(publicKey, signature, 'base64');
};

const handleOrderPayment = async (orderID: string) => {
    const { data: order, error: findError } = await supabase
        .from('orders')
        .select('*, discount')
        .eq('order_id', orderID)
        .single();

    if (findError || !order) {
        throw { statusCode: 404, message: 'Order not found' };
    }

    if (order.status === 'completed' || order.status === 'failed') {
        throw { statusCode: 400, message: 'Order already processed' };
    }

    const discountCodes = order.discounts
        ? order.discounts.split(',').map((code: string) => code.trim())
        : [];

    if (discountCodes.length > 0) {
        for (const code of discountCodes) {
            const { data: discount, error: discountError } = await supabase
                .from('discount_codes')
                .select('current_usage')
                .eq('code', code)
                .single();

            if (discount && !discountError) {
                await supabase
                    .from('discount_codes')
                    .update({ current_usage: discount.current_usage + 1 })
                    .eq('code', code);
            }
        }
    }

    const { error: updateError } = await supabase
        .from('orders')
        .update({ status: 'completed' })
        .eq('order_id', orderID);

    if (updateError) {
        throw { statusCode: 500, message: 'Failed to update order' };
    }

    const products = JSON.parse(order.products);
    const userOrderForm = {
        name: order.name,
        email: order.email,
        surname: order.surname,
        address: order.address,
        city: order.city,
        phone: order.phone,
        info_adicional: order.info_adicional
    };

    await handleSendEmail(userOrderForm, products, order.total_price ?? "0", orderID);
    await handleSendConfirmationEmailUser(userOrderForm, products, order.total_price ?? "0", orderID);
};
async function handleSendEmail(userOrderForm: any, orderProducts: UserOrderItem[], total: string, orderID: string) {
    let msg = {
        from: 'web@mrboho.ge',
        to: 'georgia@mrboho.ge',
        subject: `New order from ${userOrderForm.email}`,
        html: orderEmailTemplate(userOrderForm, orderProducts, total, orderID)
    };

    await $fetch("/api/order-success-email", {
        method: "POST",
        body: msg
    });
}
async function handleSendConfirmationEmailUser(userOrderForm: any, orderProducts: UserOrderItem[], total: string, orderID: string) {
    let msg = {
        from: 'mrboho@mrboho.ge',
        to: userOrderForm.email,
        subject: `Your order ${orderID}`,
        html: orderConfirmationEmailTemplate(userOrderForm, orderProducts, total, orderID)
    };

    await $fetch("/api/order-success-email", {
        method: "POST",
        body: msg
    });
}

export default defineEventHandler(async (event) => {
    if (event.node.req.method !== 'POST') {
        event.node.res.statusCode = 405;
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = await readBody(event);
        const orderID = body.body.external_order_id;

        const signature = getHeader(event, 'callback-signature');

        if (!verifySignature(signature as string, body)) {
            event.node.res.statusCode = 400;
            return { statusCode: 400, body: 'Invalid signature' };
        }

        const { event: eventType, body: orderData } = body;

        if (eventType === 'order_payment') {
            switch (orderData.order_status.key) {
                case 'completed':
                    await handleOrderPayment(orderID);
                    break;
                case 'failed':
                    console.log('El pago falló');
                    break;
                case 'refunded':
                    console.log('El monto fue reembolsado');
                    break;
                default:
                    console.log('Estado de pago no reconocido');
            }
        }

        return { statusCode: 200, body: 'OK' };
    } catch (error) {
        console.error('Error en el callback:', error);

        if (typeof error === 'object' && error !== null && 'statusCode' in error) {
            const customError = error as CustomError;
            event.node.res.statusCode = customError.statusCode;
            return { statusCode: customError.statusCode, body: customError.message };
        }

        event.node.res.statusCode = 500;
        return { statusCode: 500, body: 'Internal Server Error' };
    }
});
