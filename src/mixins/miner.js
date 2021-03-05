
var public_component = {
    data() {
        return {
        }
    },
    onLoad() {
    },
    methods: {
        bind() {
            var that = this;
            // uni.scanCode({
            //     success: function (res) {
            //         console.log("条码类型：" + res.scanType);
            //         console.log("条码内容：" + res.result);
            //         try {
            //         } catch (e) {
            //             console.log(e);
            //         }
            //     },
            // });

             this.jumpRouter('/pages/equipment/bind/index',"success")
            // success this.jumpRouter('/pages/equipment/bind/index',"success")
            // err  this.jumpRouter('/pages/equipment/bind/index',"err")
        }

    },



}
export default public_component;



