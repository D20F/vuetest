import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/rem.js"
import storage from "./common/js/storage.js"
import { Button, Icon, Dialog, Switch, Toast, DropdownMenu, DropdownItem, Loading } from 'vant';

import component_plugins from './component/plugins'

Vue.use(component_plugins);

Vue.use(Button);
Vue.use(Icon);
Vue.use(Switch);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading);

Vue.config.productionTip = false;
Vue.prototype.$storage = storage;

function runInBrowser() {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}

if (process.env.NODE_ENV === 'development') {
  runInBrowser();
  Vue.config.devtools = true;
} else {
  runInBrowser();
  Vue.config.devtools = false;
}
