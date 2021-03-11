const compiler = require("vue-template-compiler");
export default {
    install(Vue) {
        Vue.prototype.$loading = (content) => {
            let style = `
                    opacity: 0;
                    display: flex; 
                    transition: opacity 2s;
                    background: #03A9F4;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    min-height: 40px;
                    border-radius: 5px;
                    padding:2px 10px;
                    color: #ffffff;
                    font-size: 15px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index:1;
                `
            var Profile = Vue.extend({
                render: compiler.compileToFunctions(
                    `
                    <div
                        style="${style}"
                    >
                        <img :src="src" style="width: 25px;height: 25px;" />
                        <div style="width: 10px;" ></div>
                        <p>{{content}}</p>
                    </div>
                    `
                ).render,
                data: function () {
                    return {
                        content: content,
                        src: require("@/static/img/equipment/success.png"),
                    };
                },
            });
            var component = new Profile().$mount();
            let dom = component.$el;
            document.getElementById('app').appendChild(dom)
            setTimeout(() => { dom.style.opacity = 1; }, 0)
            setTimeout(() => { dom.style.opacity = 0; }, 2000)
            setTimeout(() => { dom.remove(); }, 4000)
        }
    }
}

