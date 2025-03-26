import { completeOrder } from '~/services/orderService';

export default defineEventHandler(async (event) => {
    const { order } = getQuery(event);

    if (!order) {
        return sendRedirect(event, '/fail-order?error=missing_order_id');
    }

    try {
        await completeOrder(order as string);

        return sendRedirect(event, `/success-order?order=${order}`);
    } catch (error) {
        console.error('PayPal callback error:', error);

        const errorMessage = error instanceof Error ? error.message : 'unknown_error';
        return sendRedirect(event, `/fail-order?error=${encodeURIComponent(errorMessage)}`);
    }
});
