export default {
    components: true,
    target: 'static',
    css: [
        '~/assets/scss/main.scss',
    ],
    modules: [
        '@nuxtjs/style-resources',
    ],
    buildModules: [
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: {
            'OpenSans': {
                wght: [400, 600],
            },
        },
        display: 'swap',
        download: true,
    },
    styleResources: {
        scss: ['~/assets/scss/_variables.scss'],
    },
}