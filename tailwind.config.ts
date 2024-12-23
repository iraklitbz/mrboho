import type { Config } from 'tailwindcss'
import FormKitVariants from '@formkit/themes/tailwindcss'
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './containers/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './store/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.js',
        './nuxt.config.ts',
        'formkit.theme.ts',
    ],
    theme: {
        extend: {
            colors: {
                'transparent': 'transparent',
                'current': 'currentColor',
                'gray-100': '#DFDFDF',
                'gray-400': '#999',
                'gray-600': '#777',
                'white': '#ffffff',
                'black': '#111',
                'lightblue': '#E2F5FD',
                'warning': '#F39300',
                'darkblue': '#1B115C',
                'skyblue': '#3567F6',
                'soft-gray': '#BEBEBE',
                'saba-whatsapp': '#35D46C',
                'saba-red': '#d40e14',
                'saba-red-100': '#9d0a0f',
                'saba-yellow': '#FDB813',
                'saba-success': '#30B675'
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [ FormKitVariants ]
} satisfies Config
