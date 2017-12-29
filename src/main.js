import Vue from "vue";
import App from "./App.vue";




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

