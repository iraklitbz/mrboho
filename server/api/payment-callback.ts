import { completeOrder } from '~/services/orderService';
import type { CustomError } from '~/types/local-types';
import crypto from 'crypto';
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
                    await completeOrder(orderID);
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
