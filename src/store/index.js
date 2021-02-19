import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import PUBLIC from './modules/public'


const store = new Vuex.Store({
  modules: {
    public: PUBLIC
  }
})

export default  store