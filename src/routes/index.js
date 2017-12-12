/**
 * Created by willchen on 2017/3/20.
 */

const
    Index = resolve => require(["page/index/Index.vue"], resolve), // 首页
    AppAction = resolve => require(["page/appAction/Index.vue"], resolve),
    AppManage = resolve => require(["page/appManage/Index.vue"], resolve),
    PhpConfig = resolve => require(["page/phpConfig/Index.vue"], resolve),


    /* 404*/
    NotFound = resolve => require(["page/NotFound.vue"], resolve);


export default [
    /* 首页 */
    {
        path     : "/workspace",
        component: Index,
        alias    : "/",
        name     : "workspace"
    },

    {
        path     : "/appAction",
        component: AppAction,
        name     : "appAction"
    },

    {
        path     : "/phpconfPub",
        component: PhpConfig,
        name     : "phpconfPub"
    },

    {
        path     : "/ipApp",
        component: AppManage,
        name     : "ipApp"
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
