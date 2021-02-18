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
    build: { 
        postcss: {
            // plugins: {
            //     'autoprefixer': true,
            // },
            // preset: {
            //     autoprefixer: {
            //         grid: true,
            //         gradient: true,
            //         overrideBrowserslist: ['last 2 versions', 'ie >= 9']
            //     },
            // },
        },
    },
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