export default defineNuxtConfig({
    app: {
        head: {
            title: 'KiriminAja',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'KiriminAja Website' }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@/assets/css/custom.css',
    ],
})
