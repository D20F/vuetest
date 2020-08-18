import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "./util/rem.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import component_plugins from './components/plugins'
Vue.use(component_plugins);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
