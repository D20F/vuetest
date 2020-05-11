import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

/**
 * 加密过程一
 * @param {string}  beRouter                当前路由
 * @param {boolean} pursecard_animate       遮罩动画显示
 * @param {object}  dataBase                数据库对象

**/
export default new Vuex.Store({
  state: {
    beRouter : '',   
    pursecard_animate:false,
    dataBase:{},
  },
  mutations: {
    beRouterFun (state, data) { 
      state.beRouter = data;
    },
    pursecard_animateFun (state, data) { 
      state.pursecard_animate = data;
    },
    dataBaseFun (state, data) { 
      state.dataBase = data;
    },
  },
  actions: {
    
  },
  modules: {

  }
})
