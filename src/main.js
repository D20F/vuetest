import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Viser from 'viser-vue'

import '@/styles/index.scss' // 公共 css

import App from './App'
import store from './store'
import router from './router'

import '@/components/index' // 全局注册组件

import '@/utils/rem'
Vue.use(Viser)

Vue.config.productionTip = false

import '@/directive/index' // 全局指令
import vuetify from './plugins/vuetify'

function runInCordova() {
    document.addEventListener('deviceready', OnDeviceready, false);
    function OnDeviceready() {
        new Vue({
            el: '#app',
            store,
            router,
            vuetify,
            render: h => h(App)
        })

    }
}
function runInBrowser() {
    new Vue({
        el: '#app',
        store,
        router,
        vuetify,
        render: h => h(App)
    })


}

if (process.env.NODE_ENV === 'development') {
    runInBrowser();
    Vue.config.devtools = true;
} else {
    runInCordova();
    Vue.config.devtools = false;
}