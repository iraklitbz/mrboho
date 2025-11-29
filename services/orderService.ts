import { createClient } from '@supabase/supabase-js';
import { orderEmailTemplate } from "~/services/emails/order";
import { orderConfirmationEmailTemplate } from "~/services/emails/orderConfirmation";
import type {UserOrderItem} from "~/types/local-types";

const config = useRuntimeConfig();
const supabase = createClient(
    config.public.SUPABASE_URL,
    config.SUPABASE_SERVICE_ROLE_KEY
);

export async function completeOrder(orderID: string) {
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

    const discountCodes = order.discount
        ? order.discount.split(',').map((code: string) => code.trim())
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
}

export async function sendOrderEmails(userOrderForm: any, orderProducts: any[], total: string, orderID: string) {
    await handleSendEmail(userOrderForm, orderProducts, total, orderID);
    await handleSendConfirmationEmailUser(userOrderForm, orderProducts, total, orderID);
}

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
