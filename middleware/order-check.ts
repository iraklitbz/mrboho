import { useMeStore } from "~/store/me";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const meStore = useMeStore();

    if (to.query.order) {
        await meStore.fetchOrderReference(to.query.order as string);

        if (!meStore.orderByReference || Object.keys(meStore.orderByReference).length === 0 || meStore.orderByReference.status !== 'completed') {
            await new Promise(resolve => setTimeout(resolve, 2000))
            await meStore.fetchOrderReference(to.query.order as string)

            if (!meStore.orderByReference || Object.keys(meStore.orderByReference).length === 0 || meStore.orderByReference.status !== 'completed') {
                return navigateTo('/');
            }
        }

        const createdAt = meStore.orderByReference.created_at;
        const createdAtDate = new Date(createdAt);
        const currentDate = new Date();

        const timeDifference = currentDate.getTime() - createdAtDate.getTime();

        if (timeDifference > 300000) {
            return navigateTo('/');
        }
    } else {
        return navigateTo('/');
    }
});
