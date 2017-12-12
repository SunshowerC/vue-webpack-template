let ExtractTextPlugin = require('extract-text-webpack-plugin');
let {
    resolve
} = require('path');

// web 工程根目录
let webRootDir = resolve(__dirname, '../');

// 工程根目录
exports.webRootDir = webRootDir;



// loader
exports.loader =
    [ //模块化的loader，有对应的loader，该文件才能作为模块被webpack识别
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    loader: 'css-loader',
                    options: {
                        minimize: process.env.NODE_ENV === 'production',
                    }
                },
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 5 versions']
                    })
                ]

            }
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|ico|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于 8k 的图片，会被编码成为base64内联，减少请求量
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            //如果是生产环境，抽离css文件，到单独的文件中。还需要plugin中配置
            use: process.env.NODE_ENV === 'production' ?
                ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }) : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            include: [resolve(webRootDir, './src')],
            options: {
                cache: true,
                fix: true,
                formatter: require('eslint-friendly-formatter'),
                emitWarning: true
            }
        }
    ];


//  别名
exports.webpackResolve = {
    extensions: ['.js','.vue'], // 定义后缀名 ，import时可以省略“.js”后缀
    alias: { // 别名。 如 import "./src/style/common.css"  ==> import "style/common.css"
              'vue$': 'vue/dist/vue.esm.js',
        'components': resolve(webRootDir, './src/components'),
        'page': resolve(webRootDir, './src/page'),
        'style': resolve(webRootDir, './src/style'),
        'script': resolve(webRootDir, './src/script'),
        'static': resolve(webRootDir, './src/static')
    }
}