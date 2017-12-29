<template>
    <aside class="nav">
        <div class="logo">

            XXXX系统

        </div>


        <figure class="user">
            <img src="../static/default_avatar.png" alt="头像" class="avatar">
            <figcaption>{{userName}}</figcaption>
        </figure>

        <ul>
            <li v-for="(item,index) in menuList"
                :key="index"
                class="nav-item"
            >
                <router-link  :to="item.url"
                              :class="{active: index === activeIndex}"
                              @click.native="activeNav(index)">{{item.name}}</router-link>
            </li>
        </ul>

    </aside>
</template>


<style lang="sass" rel="stylesheet/scss">
    $sideBarBgc: #333645;
    aside.nav {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;

        padding-bottom: 0px;

        width: 250px;
        height: 100vh; /* 100px == $headerH */
        background-color: $sideBarBgc;


    }
</style>
<script>


    export default {
        name: "SideBar",
        data() {
            return {
                activeIndex: 0,
                /* 左侧导航菜单列表*/
                menuList   : [
                    {
                        url : "/",
                        name: "工作台",
                    },
                    {
                        "name": "用户列表",
                        "url" : "/user",
                    },
                    {
                        "name": "用户详情",
                        "url" : "/user/1",
                    }
                ],
                userName: "system",
            };
        },


        methods: {
            activeNav(index) {
                this.activeIndex = index;
            }
        },

        mounted() {

        }

    };

</script>


<style lang="sass" rel="stylesheet/scss" scoped>

    $avatarW: 40px;
    $scrollW: 0;

    aside.nav {

        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 50px;

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

    .nav-item {
        > a {
            display: inline-block;
            padding-left: 20px;
            width: 100%;

            font-size: 20px;
            line-height: 2;
            color: #9898a0;
            
            &:hover,&.active {
                color: #fdfdfd;
                background-color:#1e202c ;
            }


        }


    }


</style>
