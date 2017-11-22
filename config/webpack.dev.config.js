var path = require('path')
var webpack = require('webpack')

const resolve = path.resolve;
const {
    loader,
    webpackResolve,
    webRootDir
} = require('./base.js');


module.exports = {
    entry: {
        main: resolve(webRootDir, './src/main.js')
    },
    output: {
        path: resolve(webRootDir, './build'),
        publicPath: '/build/',
        filename: 'build.js'
    },
    module: {
        rules: loader
    },
    resolve: webpackResolve,

    devServer: {
        host: '127.0.0.1',
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: true,
        noInfo: true,

        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:80',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    performance: {
        hints: false
    },
    devtool: '#source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"development"`
            },
            'packageEnv': `"${process.env.NODE_ENV}"`
        }),
    ]
}