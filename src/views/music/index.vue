<template>
    <div class="box">
        <div class="btn">state:{{ state }}</div>
        <div class="btn">hostname:{{ hostname }}</div>
        <div class="btn">registerAddressFamily:{{ registerAddressFamily }}</div>
        <div class="btn">watchAddressFamily:{{ watchAddressFamily }}</div>
        <div class="btn">zeroconf:{{ zeroconf }}</div>
        <div class="btn">result:{{ result }}</div>
        <div v-for="(item, i) in service" :key="i" class="btn">
            {{ i }}:{{ item }}
        </div>

        <div class="btn" @click="start">start</div>
        <div class="btn" @click="registerregister">registerregister</div>
        <div class="btn" @click="watch">watch</div>
        <div class="btn" @click="close">close</div>
        <div class="btn" @click="checkWifiStatus">checkWifiStatus</div>
        <div class="btn" @click="camera">camera</div>
        <div class="btn" @click="ToastDemo">ToastDemo</div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            state: "",
            zeroconf: "",
            hostname: "111",
            watchAddressFamily: "",
            registerAddressFamily: "",
            result: '',
            service: {},
        };
    },
    computed: {},
    created() {
        this.state = "start";
        let zeroconf = cordova.plugins.zeroconf;

        this.zeroconf = zeroconf;
        this.zeroconf.registerAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)
        this.zeroconf.watchAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)

        this.zeroconf.getHostname(function success(hostname) {
            this.hostname = hostname;
        });
    },
    methods: {
        // 检查是否启动了wifi
        checkWifiStatus() {
            cordova.plugins.hotspot.isWifiOn(successCB, errorCB);
            function successCB(info) {
                alert("info == true  为打开wifi", info);
            }
        },
        camera() {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
            });
            function onSuccess(message) {
                alert(message);
            }
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
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
                "_http._tcp.",
                "local.",
                "Becvert",
                80,
                {
                    foo: "bar",
                },
                function success(result) {
                    var action = result.action; // 'registered'
                    that.service = result.service;
                    alert(that.service);
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
                "_http._tcp.",
                "local.",
                function success(result) {
                    that.result = JSON.stringify(result);
                    alert('result',result);
                    alert('result',result.action);
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
    background: green;
    width: auto;
}
</style>
