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
        component: () => import("@/views/login/index"),
        meta: { bar: false }
    },

    {
        path: "/login/registered",
        component: () => import("@/views/login/registered/index"),
        meta: { bar: false }
    },
    {
        path: "/login/rest",
        component: () => import("@/views/login/rest/index"),
        meta: { bar: false }
    },
    {
        path: "/my",
        component: () => import("@/views/my/index")
    },
    {
        path: "/my/my_setting",
        component: () => import("@/views/my/my_setting/index"),
        meta: { title: '设置', bar: false }
    },
    {
        path: "/my/my_setting/protocol",
        component: () => import("@/views/my/my_setting/protocol/index"),
        meta: { title: '用户协议', bar: false }
    },
    {
        path: "/my/my_information",
        component: () => import("@/views/my/my_information/index"),
        meta: { title: '个人信息', bar: false }
    },
    {
        path: "/my/export_privateKey",
        component: () => import("@/views/my/export_privateKey/index"),
        meta: { title: '导出私钥', bar: false }
    },
    {
        path: "/my/equipment",
        component: () => import("@/views/my/equipment/index"),
        meta: { title: '设备管理', bar: false }
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