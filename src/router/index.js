import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import("@/views/introduction")
    },
]


const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router