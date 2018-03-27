import Vue from "vue";
import App from "./App.vue";

/* 注册 ElementUI 组件， 如使用其他UI框架，可替换*/
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
Vue.use(ElementUI);


import "style/common.scss";

/* 注册路由组件 */
import VueRouter from "vue-router";
Vue.use(VueRouter);



/* 浏览器请求库，绑定$http*/
import Axios from "./axios/index"; //
Vue.prototype.$http = Axios;

import routes from "./routes/index";
import store from "./store/index";

/* 路由创建 */
const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes,
});

/* 创建应用 */
new Vue({
    store,
    router,
    el: "#app",

    render: h => h(App)
});

