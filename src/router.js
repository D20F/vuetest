import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:() => import( "../src/components/Test.vue" ),
    explain:"TEST",
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
})

export default router
