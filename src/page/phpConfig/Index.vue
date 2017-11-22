<template>

        <el-table
                border
                stripe
                highlight-current-row
                :data="tableData"
                style="width: 100%;">
            <el-table-column
                    align="center"
                    prop="id"
                    width="110"
                    label="发布单号">

            </el-table-column>
            <el-table-column
                    align="center"
                    prop="appName"
                    label="应用名称">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="envDesc"
                    label="发布环境"
            >
            </el-table-column>
            <el-table-column
                    show-overflow-tooltip
                    align="center"
                    prop="creator"
                    width="120"
                    label="发布单创建者">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="orderStatusDesc"
                    label="状态">
                <template scope="scope">
                        <span :class="scope.row.orderStatus == 'CLOSED' ? 'color-success' : 'color-danger'">{{scope
                            .row.orderStatusDesc}}</span>

                </template>
            </el-table-column>


        </el-table>


</template>


<script>
    export default {
        name: "PhpConfig",
        data() {
            return {
                tableData: [{
                    "id"             : 53,
                    "creator"        : "arvinzhao",
                    "createTime"     : "2017-08-31 14:34:50",
                    "modifier"       : "53",
                    "modifyTime"     : "2017-08-31 14:35:05",
                    "status"         : 1,
                    "version"        : 2,
                    "appId"          : 381,
                    "appName"        : "pop_com",
                    "env"            : "prj",
                    "content"        : "{\"server\":{\"port\":\"10121\",\"owner\":\"arvinzhao;jasonxie;simonliang;yaphyao;alanliao;v_ivyliu\",\"root\":\"../server/pop_com/src/bootstrap.php\",\"worker_num\":16,\"daemonize\":\"true\",\"max_request\":5000,\"log_level\":\"INFO\",\"bslog_level\":\"INFO\"},\"setting\":{\"overload_mode\":\"true\",\"waiting_time\":1000,\"overload_number\":3,\"loss_number\":5}}",
                    "orderStatus"    : "CLOSED",
                    "ips"            : null,
                    "envDesc"        : "项目",
                    "orderStatusDesc": "已结单"
                }, {
                    "id"             : 52,
                    "creator"        : "yaphyao",
                    "createTime"     : "2017-08-31 10:37:17",
                    "modifier"       : "52",
                    "modifyTime"     : "2017-08-31 10:37:23",
                    "status"         : 1,
                    "version"        : 2,
                    "appId"          : 1222,
                    "appName"        : "pop_after_sale",
                    "env"            : "prj",
                    "content"        : "{\"server\":{\"port\":\"10128\",\"owner\":\"jasonxie;arvinzhao;yaphyao;v_ivyliu\",\"root\":\"../server/pop_after_sale/src/bootstrap.php\",\"worker_num\":16,\"daemonize\":\"true\",\"max_request\":5000,\"log_level\":\"INFO\",\"bslog_level\":\"INFO\"},\"setting\":{\"overload_mode\":\"true\",\"waiting_time\":1000,\"overload_number\":3,\"loss_number\":5}}",
                    "orderStatus"    : "CLOSED",
                    "ips"            : null,
                    "envDesc"        : "项目",
                    "orderStatusDesc": "已结单"
                }]
            };
        },

        computed: {},

        methods: {},


    };
</script>


<style lang="sass" rel="stylesheet/scss" scoped>

</style>
