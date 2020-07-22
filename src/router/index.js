import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"My",
    explain:"我的",
    component:() => import(/* webpackChunkName: "Setting" */ "../views/My.vue")
  },
  {
    path:"/you",
    name:"you",
    explain:"我的",
    component:() => import(/* webpackChunkName: "Setting" */ "../views/you.vue")
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to',to);
  // console.log('from',from);
  // console.log(store.state.beRouter);
  if(to.name == 'Wallet' && from.name == 'logIn'){
    // store.commit('beRouterFun', from.name)
    next(false)
  }else{
    // store.commit('beRouterFun', to.name)
    next();
  }

})

export default router
