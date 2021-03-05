import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import ACCOUNT from './modules/account'


const store = new Vuex.Store({
    modules: {
        account: ACCOUNT,
    }
})

export default store