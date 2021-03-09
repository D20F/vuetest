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
        component: () => import("@/views/my/my_setting/index"),
        meta: { title: '设置' }
    },
    {
        path: "/my/my_setting/protocol",
        component: () => import("@/views/my/my_setting/protocol/index"),
        meta: { title: '用户协议' }
    },
    {
        path: "/my/my_information",
        component: () => import("@/views/my/my_information/index"),
        meta: { title: '个人信息' }
    },
    {
        path: "/my/export_privateKey",
        component: () => import("@/views/my/export_privateKey/index"),
        meta: { title: '导出私钥' }
    },
    {
        path: "/my/equipment",
        component: () => import("@/views/my/equipment/index"),
        meta: { title: '设备管理' }
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