let path = require("path");
let webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const resolve = path.resolve;
const {
    loader,
    webpackResolve,
    webRootDir
} = require("./webpack.base.config.js");


let {
    entry,
    outputPath,
    host,
    port,
    proxy
} = require("../config");



let scriptEntry = {},
    htmlTplList = [];
/* 算出entry值与 其对应的 html-template */
/* 算出entry值与 其对应的 html-template */
computedEntryAndHtmlTpl();
function computedEntryAndHtmlTpl() {
    /* 算出entry值与 其对应的 html-template */
    Object.entries(entry).forEach(entryItem => {
        // 入口
        scriptEntry[ entryItem[0] ] = entryItem[1].script;

        // HtmlWebpackPlugin 赋值
        let htmlPluginObj = {};

        if (typeof entryItem[1].template === "string") {
            htmlPluginObj = {
                // html-withimg-loader 可以将html中img标签打包进输出文件
                template: "html-withimg-loader!" + entryItem[1].template,
                // replace 去除html 目录
                filename: resolve(outputPath, entryItem[1].template.replace(/(?:\.\/)?([^\/]*\/)/, "")),
                chunks  : [ entryItem[0] ],
            };
        } else if(typeof entryItem[1].template === "object") {
            htmlPluginObj = entryItem[1].template;
            htmlPluginObj.chunks = htmlPluginObj.chunks || [ entryItem[0] ];
        }

        htmlTplList.push(new HtmlWebpackPlugin(htmlPluginObj));
    });
}


module.exports = {
    entry: {
        // main:   './src/main.js'
        ...scriptEntry
    },
    output: {
        path    : resolve(outputPath),
        // publicPath: '/build/',
        filename: "[name].js"
    },
    module: {
        rules: loader
    },
    resolve: webpackResolve,

    context: resolve(__dirname, "../"), // 所有相对路径，相对于工程根目录

    devServer: {
        host              : host,
        port              : port,
        disableHostCheck  : true,
        historyApiFallback: true,
        noInfo            : true,

        proxy: proxy,
    },
    performance: {
        hints: false
    },
    devtool: "#source-map",

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "\"development\""
            },
            "packageEnv": `"${process.env.NODE_ENV}"`
        }),


        ...htmlTplList,
    ]
};