/**
 * Created by willchen on 2017/3/20.
 */

const
    Index = resolve => require(["page/index/Index.vue"], resolve), // 首页
    User = resolve => require(["page/user/Index.vue"], resolve),
    UserDetail = resolve => require(["page/user/Detail.vue"], resolve),


    /* 404*/
    NotFound = resolve => require(["page/NotFound.vue"], resolve);


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
