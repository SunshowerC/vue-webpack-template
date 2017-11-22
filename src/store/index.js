/**
 * Created by willchen on 2017/5/9.
 */
import Vue from "vue";

import Vuex from "vuex";

import root from "./root";
import publish from "./modules/publish";


Vue.use(Vuex);

const store = new Vuex.Store(root);

store.registerModule("publish", publish);

export default store;