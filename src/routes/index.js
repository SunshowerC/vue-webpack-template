/* eslint-disable */

const
    Index = () => import(/* webpackChunkName: "index" */ "page/index/Index.vue"),
    User = () => import(/* webpackChunkName: "userIndex" */ "page/user/Index.vue"),
    UserDetail = () => import(/* webpackChunkName: "userDetail" */ "page/user/Detail.vue"),
    /* 404*/
    NotFound = () => import(/* webpackChunkName: "notfound" */ "page/NotFound.vue");


export default [
    /* 首页 */
    {
        path     : "/",
        component: Index,
        name     : "index"
    },

    {
        path     : "/user",
        component: User,
        name     : "user"
    },
    {
        path     : "/user/:id",
        component: UserDetail,
        name     : "userDetail"
    },


    {
        path     : "/notFound",
        component: NotFound,
        name     : "notFound"
    },


    {
        path     : "*",
        component: NotFound,
        name     : "noSuchPage"
    }
];
