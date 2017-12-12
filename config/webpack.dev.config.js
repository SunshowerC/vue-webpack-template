var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const resolve = path.resolve;
const {
    loader,
    webpackResolve,
    webRootDir
} = require('./webpack.base.config.js');


let {
    entry,
    outputPath,
    host,
    port,
    proxy
} = require('../config');



let scriptEntry = {},
    htmlTplList = [];
/* 算出entry值与 其对应的 html-template */
Object.entries(entry).forEach(entryItem => {
    scriptEntry[ entryItem[0] ] = entryItem[1].script;

    htmlTplList.push(new HtmlWebpackPlugin({
        // favicon: resolve(webRootDir, './src/static/ico_pb_16X16.ico' ),
        //html-withimg-loader 可以将html中img标签打包进输出文件
        template: 'html-withimg-loader!' +  entryItem[1].template,
        filename:  entryItem[1].template.replace('html-template/',''),
        chunks: [ entryItem[0] ],
        inject: true,
    }))
})


module.exports = {
    entry: {
        // main:   './src/main.js'
        ...scriptEntry
    },
    output: {
        path: resolve(outputPath),
        // publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        rules: loader
    },
    resolve: webpackResolve,

    context: resolve(__dirname, '../'),  // 所有相对路径，相对于工程根目录

    devServer: {
        host: host,
        port: port,
        disableHostCheck: true,
        historyApiFallback: true,
        noInfo: true,

        proxy: proxy,
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


        ...htmlTplList,
    ]
}