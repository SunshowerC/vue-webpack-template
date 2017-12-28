/**
 * Created by willchen on 2017/12/11.
 */
module.exports = {
    host: "127.0.0.1",
    port: 8080,

    /*
    * 本地开发，代理转发
    * 配置如 https://webpack.js.org/configuration/dev-server/#devserver-proxy
    */
    proxy: {
        "/api/": {
            target      : "http://127.0.0.1:80",
            changeOrigin: true,
            pathRewrite : {
                "^/api": ""
            }
        }
    },

    /*
    * 入口
    * */
    entry: {
        main: {
            script  : "./src/main.js",
            template: "./html-template/index.html",
        },
        user: {
            script  : "./src/user.js",
            template: "./html-template/user/index.html",
        },
        admin: {
            script  : "./src/admin.js",
            template: {
                // 模板路径
                // html-withimg-loader 可以将html中img标签打包进输出文件
                template: "html-withimg-loader!" + "./html-template/user/admin.html",
                // 输出文件路径
                filename: "../user/admin.html", // 相对路径相对的是 publicPath 路径
                chunks  : [ "admin", "user" ], // 指定额外包含的chunks
            },
        }

    },

    outputPath: "./build", // 打包输出目录
    publicPath: "assets/", // 公共资源目录

    /* 抽离第三方库，避免每次都打包，优化打包效率*/
    vendor: [
        "vue",
        "vue-router",
        "vuex",
        "element-ui",
        "axios",
        "qs",
    ],

};


