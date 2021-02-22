import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import("@/views/music")
    },
    
    {
        path: "/video",
        component: () => import("@/views/video")
    },

    {
        path: "/book",
        component: () => import("@/views/book")
    },

    {
        path: "/image",
        component: () => import("@/views/image")
    },
    
    {
        path: "/my",
        component: () => import("@/views/my")
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