declare global {
    interface Window {
        dataLayer: any[];
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const { ANALITYC_ID } = useRuntimeConfig().public;

    function gtag(...args: any[]): void {
        window.dataLayer.push(args);
    }
    window.dataLayer = window.dataLayer || [];

    gtag("js", new Date());
    gtag("config", ANALITYC_ID);

    useHead({
        script: [
            {
                src: `https://www.googletagmanager.com/gtag/js?id=${ANALITYC_ID}`,
                async: true,
            },
        ],
    });
});
