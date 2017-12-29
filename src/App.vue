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
                keepAliveList: []
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

    $mainBgc: #f6f6f6;
    $logoW: 250px;
    $gPadding: 20px;
    
    .main {
        margin-left: $logoW;
        margin-top: 0;

        padding: $gPadding;
        min-height: 100vh;

        background-color: $mainBgc;


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
