// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/': {
            ssr: true
        }
    },
    modules: [
        '@/modules/vuetify'
    ],
    app: {
        head: {
            title: "Cybercorsaire - La Cybersécurité en Guadeloupe",
            meta: [
                {
                    name: 'description',
                    content: "Cybercorsaire est un cabinet de consulting fondé en Guadeloupe en 2022. Face à un Cyperpirate, n'hésitez pas, faites appel à un cybercorsaire."
                }
            ]
        }
    }
})
