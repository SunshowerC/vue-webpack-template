<template>
    <aside class="nav">
        <div class="logo">

            XXXX系统

        </div>


        <figure class="user">
            <img src="../static/default_avatar.png" alt="头像" class="avatar">
            <figcaption>{{userName}}</figcaption>
        </figure>


        <el-menu unique-opened
                 :default-active="'/' + this.$route.path.split('/')[1]"
                 :router=true>
            <template v-for="(item,index) in menuList">
                <el-menu-item v-if="  item.children.length === 0" :key="item.id" :index="item.url">
                    <i v-if="item.icon" :class="'el-icon-' + item.icon"></i>
                    {{item.name}}
                </el-menu-item>


                <el-submenu v-else :index="item.url" :key="item.id">
                    <template slot="title"><i v-if="item.icon" :class="'el-icon-' + item.icon"></i>{{item.name}}
                    </template>


                    <el-menu-item v-for="child in item.children" :key="child.id" :index="child.url">
                        <i v-if="child.icon" :class="'el-icon-' + child.icon"></i>{{child.name}}
                    </el-menu-item>
                </el-submenu>

            </template>


        </el-menu>


    </aside>
</template>


<script>


    export default {
        name: "SideBar",
        data() {
            return {
                /* 左侧导航菜单列表*/
                menuList: [
                    {
                        id      : "0",
                        icon    : "menu",
                        url     : "/",
                        name    : "工作台",
                        children: []
                    },
                    {
                        "id"      : 19,
                        "name"    : "应用发布",
                        "url"     : "/appManage",
                        "icon"    : "upload",
                        "children": [
                            {
                                "id"      : 26,
                                "name"    : "应用操作流水",
                                "url"     : "/appAction",
                                "icon"    : "",
                                "children": []
                            },
                            {
                                "id"      : 46,
                                "name"    : "PHP配置发布",
                                "url"     : "/phpconfPub",
                                "icon"    : "",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id"      : 21,
                        "name"    : "发布管理",
                        "url"     : "/pubManage",
                        "icon"    : "document",
                        "children": [
                            {
                                "id"      : 29,
                                "name"    : "IP应用管理",
                                "url"     : "/ipApp",
                                "icon"    : "",
                                "children": []
                            }
                        ]

                    }
                ],
                userName: "system",
            };
        },


        methods: {



        },

        mounted() {

        }

    };

</script>

<style lang="sass" rel="stylesheet/scss">
    @import "../style/common/variable";

    aside.nav {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;

        padding-bottom: 0px;

        width: $logoW;
        height: 100vh; /* 100px == $headerH */
        background-color: $sideBarBgc;

        .el-menu {
            background-color: inherit;
            user-select: none;

        }

        /*重写导航栏样式-s*/
        .el-submenu .el-submenu__title,
        .el-menu-item {
            color: $sideColor;
            font-size: 16px;
        }

        .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover,
        .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover,
        .el-menu-item:hover,
        .el-submenu .el-menu-item:hover,
        .el-submenu__title:hover {
            background-color: $sideActiveBgc;
        }

        .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
        .el-menu-item.is-active {
            color: #ffffff;
            background-color: $sideActiveBgc;
        }
        /*重写导航栏样式-e*/

    }
</style>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../style/common/variable";

    $avatarW: 40px;
    $scrollW: 0;

    aside.nav {

        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 50px;

        /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
        &::-webkit-scrollbar {
            width: $scrollW;
        }
        /*定义滚动条的轨道，内阴影及圆角*/
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            border-radius: 10px;
            background-color: #f5f5f5;
        }
        /*定义滑块，内阴影及圆角*/
        &::-webkit-scrollbar-thumb {

            height: 20px;
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: #5d5f69;
        }

        .logout {
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 10;

            padding: 15px;
            width: $logoW;
            text-align: center;
            color: #fafafa;
            font-size: 34px;
            background-color: inherit;
            box-shadow: 0 -2px 9px #222;

        }

        i.logout-icon {
            transition: all 0.8s;
            font-size: inherit;
            cursor: pointer;

            &:hover {
                text-shadow: 0 0 8px #20a0ff;
                color: #20a0ff;
            }
        }
    }

    .logo-img {
        display: block;
        margin: 0 auto 0;
        width: 85%;
    }

    .logo {
        padding: 20px 0;

        color: #eaeaea;
        text-align: center;
        font-size: 34px;

        background-color: #474a57; /*474a57*/
        position: relative;
    }

    .user {
        padding: 20px;
        border-bottom: 1px solid #3c404d;

        color: #dddddd;
        text-align: center;
        .avatar {
            width: $avatarW;
            height: $avatarW;
            border-radius: 50%;
        }

    }

    /*.bg {
        background-color: rgba(255,255,255,0.1);
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
    }*/


</style>
