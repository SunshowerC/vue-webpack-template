/**
 * Created by willchen on 2017/4/17.
 */

import qs from "qs";
import Axios from "axios";
import config from "./config";

const axios = Axios.create(config);

// 请求拦截器
axios.interceptors.request.use(config => {
    let configData = config.data;

    /* 以ajax形式 Content-Type: application/json， 即payload 形式提交*/
    if(config.dataType === "json") {
        return config;
    }
    /* 以表单形式 Content-Type: application/x-www-form-urlencoded，即form data形式提交,需要stringify */
    if(configData) {
        config.data = qs.stringify(configData);
    }


    return config;
}, err => {
    /* 请求错误统一处理*/
    alert("提交错误！");


    return Promise.reject(err);
});


/* 响应头拦截处理数据*/
axios.interceptors.response.use(res => {

    const data = res.data;

    // 响应拦截处理
    if (1 === parseInt(data.status)) {
        // 对接口异常信息进行友好展示
        alert(data.message);


        return Promise.reject(data);
    }

    return data;

}, error => {

    // 对请求响应异常信息进行友好展示
    alert(error.message);

    return Promise.reject(error);
});


export default axios;




