import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        ignores: ['node_modules/**'], // Archivos o directorios a ignorar
    },
    {
        files: ['**/*.js', '**/*.vue'], // Aplica ESLint a estos archivos
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            prettier,
        },
        extends: [
            'eslint:recommended',
            'plugin:vue/vue3-recommended',
            prettierConfig,
        ],
        rules: {
            'prettier/prettier': [
                'error',
                {
                    useTabs: true,       // Usa tabulación en lugar de espacios
                    semi: true,          // Punto y coma al final
                    singleQuote: true,   // Comillas simples
                },
            ],
            indent: ['error', 'tab'], // Configuración de indentación
        },
    },
];