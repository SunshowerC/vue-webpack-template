# 开发
1. `cnpm i` or `npm i` 安装依赖包
2. `npm run dev` 跑 webpack-dev-server服务

# 部署
1. npm run product



# 功能

## 基本
1. 图片请求压缩，小于8k的图片用base64编码内联（基于url-loader）
2. scss 预编译，postcss autoprefixer 向下兼容处理（基于postcss-loader，sass-loader）
3. babel es6 编译,支持对象解构赋值`...`语法（基于babel-preset-env与transform-object-rest-spread插件）
4. eslint 代码检查，代码自动格式化处理。（基于eslint，eslint-loader）

## 开发环境
0. webpack-dev-server 热加载页面。
1. devServer.proxy 请求代理转发，解决开发环境跨域情况的前后端交互问题

## 生产环境
0. `ExtractTextPlugin` css文件抽离打包，抽离css文件到单独的样式文件中。（基于extract-text-webpack-plugin）
1. `HtmlWebpackPlugin` html模板：html文件根据html模板文件打包生成。并且能够在html模板文件使用img（基于html-webpack-plugin，html-withimg-loader）
2. `dll`抽离第三方库，优化打包效率。（基于DllPlugin）
3. 代码混淆加密压缩。

