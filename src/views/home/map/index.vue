<template>
    <div class="box">
        <div class="btnbox">
            <img
                @click="move"
                src="@/static/img/home/map/map_icon_current@3x.png"
            />
            <img
                @click="openSysMap(list.longitude, list.latitude, list.name)"
                src="@/static/img/home/map/map_icon_navigation@3x.png"
            />
        </div>
        <div id="container"></div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";

export default {
    components: {},
    data() {
        return {
            list: {},
            map: {},
        };
    },
    // mixins: [public_mixin, map_mixin],
    methods: {
        openSysMap(lng, lat, title) {
            var mapsSource = [
                {
                    title: "高德地图",
                    pname: "com.autonavi.minimap",
                    action: "amapuri://",
                    getUrl: function () {
                        var url;
                        url = "amapuri://route/plan/";
                        url +=
                            "?sourceApplication=APP&dname=" +
                            encodeURIComponent(title) +
                            "&dlat=" +
                            lat +
                            "&dlon=" +
                            lng +
                            "&dev=0";
                        return url;
                    },
                },
                {
                    title: "百度地图",
                    pname: "com.baidu.BaiduMap",
                    action: "baidumap://",
                    getUrl: function () {
                        var url =
                            "baidumap://map/direction?destination=" +
                            encodeURIComponent(
                                "latlng:" + lat + "," + lng + "|name:" + title
                            ) +
                            "&mode=driving&src=APP&coord_type=gcj02";
                        return url;
                    },
                },
            ];
            //  手机浏览器
            // location.href = mapsSource[0].getUrl()
            // 混合开发
            cordova.InAppBrowser.open(mapsSource[0].getUrl(), "_system");
        },
        move() {
            this.map.moveMap(this.list);
        },
    },
    created() {
        this.list = this.$route.query;
        this.$nextTick(() => {
            this.map = require("@/utils/map/index");
            this.map.init(this.list);
        });
    },
};
</script>

<style scoped  lang="scss">
.box {
    width: 100%;
    height: inherit;
    overflow-y: auto;
    position: relative;
}
#container {
    width: 100%;
    height: 100%;
}
.btnbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    left: 5%;
    top: 60px;
    z-index: 9999;
    position: fixed;
    img:nth-child(1) {
        width: 44px;
        height: 44px;
    }
    img:nth-child(2) {
        width: 88px;
        height: 44px;
    }
}
</style>
