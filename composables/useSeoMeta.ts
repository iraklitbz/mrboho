export const useSeoMeta = (image:string, title:string, description:string, url: string) => {
    useHead({
        title,
        meta: [
            { name: 'description', content: description },

            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: url },
            { property: 'og:type', content: 'product' },

            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:site_name', content: 'MR.BOHO' },

            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image }
        ]
    })
}
