import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import playwright from 'eslint-plugin-playwright'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.browser },
    },
    {
        ...playwright.configs['flat/recommended'],
        files: ['tests/**'],
        rules: {
            ...playwright.configs['flat/recommended'].rules,
            'playwright/no-skipped-test': 'error',
            'playwright/no-disabled-test': 'error',
            'playwright/no-focused-test': 'error',
            'playwright/no-pause': 'error',
            'playwright/no-test-title': 'error',
            'playwright/no-test-duplicate-title': 'error',
        },
    },
    tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
])
