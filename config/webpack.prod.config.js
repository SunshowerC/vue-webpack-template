var path = require('path');
var webpack = require('webpack'),
    {loader, webpackResolve, webRootDir} = require('./webpack.base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


const resolve = path.resolve;
let {
    entry,
    outputPath,
    publicPath,
    proxy,
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
        filename: resolve(outputPath, entryItem[1].template.replace('html-template/','') ),
        chunks: [ entryItem[0] ],
    }))
})

module.exports = {
    entry: {
        // main: './src/main.js',
        ...scriptEntry
    },
    output: {
        // path: resolve(outputPath, 'assets'),
        // publicPath: 'assets', // 公共资源路径
        path: resolve(outputPath, publicPath),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: loader
    },
    resolve: webpackResolve,

    context: resolve(__dirname, '../'), // 所有相对路径，相对于工程根目录

    performance: {
        hints: false
    },


    devtool: '#source-map',

    plugins: htmlTplList,

}

 
 
module.exports.plugins = (module.exports.plugins || []).concat([
    /*webpack 定义变量，可在其他模块访问到该变量值，以便根据不同环境来进行不同情况的打包操作*/
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: `"development"`
        },
    }),
    /*清除之前打包过的文件*/
    new CleanWebpackPlugin(['assets'], {
        root: resolve(outputPath),   // root 必须为绝对路径
        verbose: true,
        dry: false,
        exclude: [],
        watch: false
    }),

    /*把dll文件添加到输出的HTML中*/
    new AddAssetHtmlPlugin({
        filepath: resolve(outputPath, './dll/vendor.dll.*.js'),
        includeSourcemap: false,
        publicPath: '/dll',  //resolve(outputPath, 'dll')
        // outputPath: resolve(outputPath, 'dll'),
    }),
    /*压缩，混淆加密*/
    new webpack.optimize.UglifyJsPlugin({
        // sourceMap: true,
        // 最紧凑的输出
        beautify: false,
        // 删除所有的注释
        comments: false,

        compress: {
            warnings: false,
            // 删除所有的 `console` 语句
            // 还可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
        }
    }),

    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new ExtractTextPlugin('style.[chunkhash:8].css'),

    new webpack.DllReferencePlugin({
        context: webRootDir,   // 和 dll.config.js 对应
        manifest: require( resolve(webRootDir, './config/manifest.json') ),

    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "vendor",
    //     filename: "vendor.js",
    //     minChunks: Infinity,
    //     chunks: ["main"],  // 只在 main 的 entry 中使用到 commonChunk
    // }),




])

