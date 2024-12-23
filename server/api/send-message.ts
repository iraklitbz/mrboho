import { Resend } from 'resend'
const config = useRuntimeConfig();
const resend = new Resend(config.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const data = await resend.emails.send(body);

        return data;
    } catch (error) {
        return { error }
    }
})