let path = require("path"),
    fs = require("fs"),
    webpack = require("webpack");

let {webRootDir} = require("./webpack.base.config.js");

const CleanWebpackPlugin = require("clean-webpack-plugin");


/* 抽离第三方库，避免每次都打包，优化打包效率*/
let {vendor, outputPath} = require("../config");

module.exports = {
    entry: {
        // 　　vendor: path.resolve(__dirname, './src/vendor.js')  //无效，使用DllPlugin时vendor必须为array
        vendor: vendor,
    },
    output: {
        path    : path.resolve(outputPath, "dll"),
        filename: "[name].dll.[hash:4].js",
        library : "[name]_[hash]"
    },
    plugins: [
	  /* 清除之前打包过的文件*/
        new CleanWebpackPlugin(["dll"], {
            root   : path.resolve(outputPath),
            verbose: true,
            dry    : false,
            exclude: [],
            watch  : false
        }),

        new webpack.DllPlugin({
            path   : path.resolve(webRootDir, "./config/manifest.json"),
            name   : "[name]_[hash]",
            context: webRootDir
        })
    ]
}; 