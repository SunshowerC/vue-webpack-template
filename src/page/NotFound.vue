<template>
    <div class="not-found" v-once>
        <img src="../static/notfound.gif" alt="404not_found">
        <p class="not-found-text">404 Not Found!</p>
        <p class="not-found-text">您要查看的页面<strong>不存在</strong>或<strong>无权访问</strong>！</p>
    </div>
</template>


<script>
    export default {

    };
</script>


<style lang="sass" rel="stylesheet/scss" scoped>
    .not-found {
        text-align: center;


        > img {
            filter: invert(0.035);
        }
        .not-found-text {
            font-size: 30px;
            color: #454545;
            line-height: 1.75;
            margin-bottom: 20px;
        }
    }
</style>
