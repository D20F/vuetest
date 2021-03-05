<template>
    <div class="box">
        <div class="btn">主机名:{{ hostname }}</div>
        <div class="btn">发布内容:</div>
        <div v-for="(item, i) in service" :key="i" class="btn">
            {{ i }}:{{ item }}
        </div>
        <div class="btn">响应内容:{{ result }}</div>
        <div v-for="(item, i) in result" :key="i" class="btn">
            {{ i }}:{{ item }}
        </div>
        <input type="text" v-model="host" placeholder="申请服务">
        <input type="text" v-model="val" placeholder="寻找服务">
        <div class="btn" @click="start">start</div>
        <div class="btn" @click="registerregister">发布服务</div>
        <div class="btn" @click="watch">监控服务</div>
        <div class="btn" @click="close">close</div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            val: "",
            host: "",
            zeroconf: "",
            hostname: "",
            watchAddressFamily: "",
            registerAddressFamily: "",
            result: {},
            service: {},
        };
    },
    computed: {},
    created() {
        let zeroconf = cordova.plugins.zeroconf;

        this.zeroconf = zeroconf;
        this.zeroconf.registerAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)
        this.zeroconf.watchAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)
    },
    methods: {
 
        ToastDemo() {
            ToastDemo.showToast("法克 fuck", onSuccess, onFail);
            function onSuccess(message) {}
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
        start() {
            let that = this;
            this.ToastDemo();
            that.zeroconf.getHostname(onSuccess, onFail);
            function onSuccess(hostname) {
                that.hostname = hostname;
                alert("Failed because: " + hostname);
            }
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
        registerregister() {
            this.ToastDemo();
            let that = this;
            that.zeroconf.register(
                // "_http._tcp.",
                this.host,
                "local.",
                "FB",
                80,
                {
                    foo: "bar",
                },
                function success(result) {
                    var action = result.action; // 'registered'
                    that.service = result.service;
                    this.ToastDemo();
                },
                function (err) {
                    alert(err);
                }
            );
        },
        close() {
            this.zeroconf.close();
        },
        watch() {
            let that = this;
            this.ToastDemo();
            that.zeroconf.watch(
                // "_http._tcp.",
                // "_spore._http._tcp.",
                this.val,
                "local.",
                function success(result) {
                    that.result = result;
                    this.ToastDemo();
                },
                function (err) {
                    alert(err);
                }
            );
        },


    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.btn {
    margin: 10px 0;
    width: auto;
}
</style>
