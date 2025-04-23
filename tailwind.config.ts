import type { Config } from 'tailwindcss'
import FormKitVariants from '@formkit/themes/tailwindcss'
export default {
    darkMode: 'class',
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
                'gray-50': '#F8F5F1',
                'gray-100': '#DFDFDF',
                'gray-400': '#999',
                'gray-600': '#777',
                'gray-700': '#555',
                'gray-800': '#333',
                'gray-900': '#222',
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
                'saba-success': '#30B675',
            },
            backgroundColor: {
                dark: '#121212',
                'dark-card': '#1E1E1E',
                'dark-surface': '#242424'
            },
            textColor: {
                'dark-primary': '#FFFFFF',
                'dark-secondary': '#AAAAAA',
            },
            borderColor: {
                'dark-border': '#333333'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [ FormKitVariants, require('tailwindcss-motion') ]
} satisfies Config