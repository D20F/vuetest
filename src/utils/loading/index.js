import loading from './loading.vue'
import toast from './toast.vue'


export default {
    install(Vue) {
        var loadingDom;

        Vue.prototype.$loading = (val) => {
            var Profile = Vue.extend({
                components: {
                    loading
                },
                render(h) {
                    let props = {
                        content:val.content,
                        mask:val.mask,
                        icon:val.icon,
                    }
                    return h('loading', { props })

                },
            });
            loadingDom = new Profile().$mount();
            document.getElementById('app').appendChild(loadingDom.$el)
        }
        Vue.prototype.$loadingHide = () => {
            loadingDom.$el.remove();
        }
        Vue.prototype.$toast = (val) => {
            let time;
            val.time ? time = val.time : time = 2;
            var Profile = Vue.extend({
                components: {
                    toast
                },
                render(h) {
                    let props = {
                        content:val.content,
                    }
                    return h('toast', { props })
                },
            });
            var component = new Profile().$mount();
            
            document.getElementById('app').appendChild(component.$el)
            setTimeout(() => { component.$el.style.opacity = 1; }, 0)
            setTimeout(() => { component.$el.style.opacity = 0; }, time * 1000)
            setTimeout(() => { component.$el.remove(); }, time * 2 * 1000)
        }
    }
}

