<template>
    <div id="app">

        <Sidebar></Sidebar>



        <section class="main">
            <transition
                    appear
                    name="fade"
                    mode="out-in">

                <keep-alive :include="keepAliveList" >
                    <router-view >

                    </router-view>
                </keep-alive>
            </transition>
        </section>

        <!--<ExternalLink></ExternalLink>-->
    </div>


</template>


<script>
    import Sidebar from "components/Sidebar";

    export default {
        name: "app",
        data() {
            return {
                keepAliveList: [ "AppIndex", "appActionIndex", "publishPlanIndex"].join(",")
            };
        },
        components: {
            Sidebar,


        },
        computed: {

        },


    };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    @import "./style/common/variable";

    $mainBgc: #f6f6f6;

    .main {
        margin-left: $logoW;
        margin-top: 0;

        padding: $gPadding;
        min-height: 100vh;

        background-color: $mainBgc;

    /*
        perspective: 1500px;
        perspective-origin: 50% 0;

        &>div {
            transform-style: preserve-3d;
            !*backface-visibility: hidden;*!
        }*/

    }




    .slide-enter-active {
        animation: slide-in .5s;
    }
    .slide-leave-active {
        animation: slide-out .5s;
    }


    @keyframes slide-in {
        0% {
            transform: rotateY(270deg);
        }

        100% {
            transform: rotateY(360deg);

        }
    }
    @keyframes slide-out {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(90deg);
        }
    }



</style>
