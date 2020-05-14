module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module
            .rule('images')
                .use('url-loader')
                    .loader('url-loader')
                    .tap(options => Object.assign(options, { limit: 10240 }))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            {
                // '/roomi2/' // only for prod
            }
        } else { // dev
            // org, no changes
        }       
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/custom.scss";`
            }
        }
    }
}