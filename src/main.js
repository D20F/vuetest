import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "./util/rem.js"


import component_plugins from './components/plugins'
import vuetify from './plugins/vuetify';
Vue.use(component_plugins);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
