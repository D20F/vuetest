import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

/**
 * 加密过程一
 * @property {string}  beRouter                当前路由
 * @param {boolean} pursecard_animate       遮罩动画显示
 * @param {object}  dataBase                数据库对象

**/
let data = {
  a:'',
  c:{
    d:''
  }
} 
const moduleA = {
  state: ()=>({
    beRouter : {
      a:'',
      c:{
        d:''
      }
    },   
    pursecard_animate : {
      a:'',
      c:{
        d:''
      }
    },   
   
    dataBase:{},
  }),
  mutations: {
    init (state) { 
      state.beRouter = data;
      state.pursecard_animate = data;
    },
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
}

const moduleB = {
  state: ()=>({
    ccc : '1',   
  }),
  mutations: {
    // beRouterFun (state, data) { 
    //   state.beRouter = data;
    // },
  },
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default  store