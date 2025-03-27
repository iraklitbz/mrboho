declare global {
    interface Window {
        dataLayer: any[];
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        const { ANALITYC_ID } = useRuntimeConfig().public;

        // Configuración del dataLayer
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', ANALITYC_ID);

        // Crear e inyectar el script manualmente
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALITYC_ID}`;
        script.async = true;
        document.head.appendChild(script);
    }
});
