import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import("@/views/equipment/index")
    },
    {
        path: "/equipment/bind",
        component: () => import("@/views/equipment/bind/index")
    },

    {
        path: "/income",
        component: () => import("@/views/income/index")
    },

    {
        path: "/login",
        component: () => import("@/views/login/index")
    },
    
    {
        path: "/login/registered",
        component: () => import("@/views/login/registered/index")
    },
    {
        path: "/login/rest",
        component: () => import("@/views/login/rest/index")
    },
    {
        path: "/my",
        component: () => import("@/views/my/index")
    },
    {
        path: "/my/my_setting",
        component: () => import("@/views/my/my_setting/index")
    },
    {
        path: "/my/my_setting/protocol",
        component: () => import("@/views/my/my_setting/protocol/index")
    },
    {
        path: "/my/my_information",
        component: () => import("@/views/my/my_information/index")
    },
    {
        path: "/my/export_privateKey",
        component: () => import("@/views/my/export_privateKey/index")
    },
    {
        path: "/my/equipment",
        component: () => import("@/views/my/equipment/index")
    },
    {
        path: "/my/my_setting/modify_password",
        component: () => import("@/views/my/my_setting/modify_password/index")
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