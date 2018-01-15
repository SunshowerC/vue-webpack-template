
# 开发
1. `cnpm i` or `npm i` 安装依赖包
2. `npm run dev` 跑 webpack-dev-server服务

# 部署
1. npm run product

# 配置
在 `config.js` 中进行代理转发配置，webpack多入口配置，抽离第三库配置等

# 工程目录结构

```
.
├── build/                      # webpack 打包输出路径
│   ├── index.html              # 生产环境的index.html入口
│   └── ...
│
├── config/                     # webpack 配置文件夹
│   ├── dll.entry.js            # dllPlugin抽离第三方库 的执行入口（避免重复打包）
│   ├── webpack.dll.conf.js     # dllPlugin抽离第三方库打包的 webpack 配置
│   ├── webpack.base.conf.js    # 本地开发环境 和 生产环境公用的webpack 配置，如loader,alias之类
│   ├── webpack.dev.conf.js     # 本地开发环境的 webpack 入口
│   └── webpack.prod.conf.js    # 生产环境的 webpack 打包入口
│
├── html-template/             # html 模板
│   ├── user/
│   │   ├── index.html         # 应用其他入口文件 （eg: 访问127.0.0.1:8080/user/index.html 可以访问到该入口）
│   │   └── ...
│   │
│   └── index.html             # 应用顶部入口文件（eg: 访问127.0.0.1:8080/ 可以访问到该入口）
│
├── src/                        # 业务源码文件夹
│   ├── main.js                 # 应用入口文件
│   ├── App.vue                 # vue 应用根组件，在main.js中引入
│   │
│   ├── xxx.js                 # 应用其他入口文件
│   │
│   │
│   ├── components/             #  可复用基础组件
│   │   ├── SelectorItem.vue
│   │   └── ...
│   │
│   ├── page/                   # 单个页面的组件目录
│   │   ├── workspace/           #  一级导航路径对应的 所有页面文件夹
│   │   │      ├── components/        #  一级路径页面 拆分的组件。
│   │   │      │      └── Dialog.vue
│   │   │      ├── Index.vue              # 对应一级路径的页面 ( /workspace/ )
│   │   │      ├── Detail.vue       # 对应的子页面( /workspace/detail/:id )
│   │   │      └── ......
│   │   ├── user/
│   │   └── ...
│   │
│   ├── static/                   #  静态资源目录
│   │   ├── fonts/                # 字体存放目录
│   │   └── images/          # 图片资源存放目录
│   │
│   ├── script/                   #  js文件夹
│   │
│   ├── style/                   #  可复用样式文件，不可复用的之间写在`.vue`文件中
│   │   ├── common.scss                # 全局通用样式
│   │   └── ......
│   │
│   ├── store/                   #  状态管理器，需模块化
│   │   ├── index.js                # 组装模块并导出 store 的地方
│   │   ├── root.js                # 根模块
│   │   └── modules/            #  vuex模块目录
│   │           ├── publish.js       # 发布模块
│   │           └── ......
│   │
│   ├── routes/                   #  路由配置
│   │
│   └── axios/                   #  http 库
│       ├── index.js                #  配置好的http构造实例
│       └── config.js              #  配置请求
│
│
├── config.js                   # 基础常用配置，包括代理转发配置，webpack多入口配置，抽离第三库配置等
├── .babelrc                    # babel 配置文件
├── .eslintrc.js                # eslint 规则配置文件（由于每个人的编程习惯不一样，本模板只收录了可自动 fix 的规则，从而全部代码风格统一一致）
├── .gitignore                  # git 工程忽略文件
├── postcss.config.js           # postcss配置，本模板仅配置了autoprefixer
├── .gitignore                  # git 工程忽略文件
└── package.json                # npm 配置文件
```

# 功能

## 基本
1. 图片请求压缩，小于8k的图片用base64编码内联（基于url-loader）
2. scss 预编译，postcss autoprefixer 向下兼容处理（基于postcss-loader，sass-loader）
3. babel es6 编译,支持对象解构赋值`...`语法（基于babel-preset-env与transform-object-rest-spread插件）
4. eslint 代码检查，代码自动格式化处理。（基于eslint，eslint-loader）
5. 多入口配置（通过 config.js 配置）

## 开发环境
0. webpack-dev-server 热加载页面。
1. devServer.proxy 请求代理转发，解决开发环境跨域情况的前后端交互问题

## 生产环境
0. `ExtractTextPlugin` css文件抽离打包，抽离css文件到单独的样式文件中。（基于extract-text-webpack-plugin）
1. `HtmlWebpackPlugin` html模板：html文件根据html模板文件打包生成。并且能够在html模板文件使用img（基于html-webpack-plugin，html-withimg-loader）
2. `dll`抽离第三方库，优化打包效率。（基于DllPlugin）
3. 自动抽离 代码分割(code-splitting) 和 懒加载(lazy-load) 文件（如路由文件）中的公用模块，并异步按需加载该文件。（基于 `CommonsChunkPlugin` ）
4. 代码混淆加密压缩。


