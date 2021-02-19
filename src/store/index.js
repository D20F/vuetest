import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import system from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user:user,
    system:system,
  },
})

export default store
