<template>
    <div class="box">
        <div class="topbar">
            <p v-if="account.status == 'online'">在线</p>
            <p v-else-if="account.status == 'rest'">休息</p>
            <p v-else>离线</p>
            <p>日常</p>
            <img :src="account.avatar" />
        </div>
        <div
            @click="jumpRouter('/recycle/recyclingSite', item)"
            class="content"
            v-for="(item, index) in list"
            :key="index"
        >
            <div class="top">
                <div>
                    <p>{{ item.name }}</p>
                    <img
                        @click.stop="open_map(item)"
                        src="@/static/img/home/icon1.png"
                    />
                </div>
                <div>
                    <img src="@/static/img/home/icon2.png" />
                    <p>{{ item.address }}</p>
                    <p>{{ item.region }}</p>
                </div>
            </div>
            <div class="order_btn">
                <div></div>
                <div>
                    <p>等待回收</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import publics from "@/mixins/public.js";
import { getStorage, setStorage } from "@/utils/storage/storage.js";

export default {
    data() {
        return {
            list: [
                {
                    address: "广东省广州市",
                    region: "海珠区丽影广场",
                    name: "客村回收点",
                    state: "sada",
                    time: "2022.02.20",
                    latitude: 23.096144,
                    longitude: 113.321216,
                },
                {
                    address: "广东省广州市",
                    region: "海珠区丽影广场",
                    name: "丽影广场回收点",
                    state: "sada",
                    time: "2022.02.20",
                    latitude: 23.095901,
                    longitude: 113.322455,
                },
                {
                    address: "广东省广州市",
                    region: "海珠区丽影广场",
                    name: "客村回收点",
                    state: "sada",
                    time: "2022.02.20",
                    latitude: 23.096144,
                    longitude: 113.321216,
                },
                {
                    address: "广东省广州市",
                    region: "海珠区丽影广场",
                    name: "丽影广场回收点",
                    state: "sada",
                    time: "2022.02.20",
                    latitude: 23.095901,
                    longitude: 113.322455,
                },
                {
                    address: "广东省广州市",
                    region: "海珠区丽影广场",
                    name: "客村回收点",
                    state: "sada",
                    time: "2022.02.20",
                    latitude: 23.096144,
                    longitude: 113.321216,
                },
   
 
            ],
            latitude: 0,
            longitude: 0,
        };
    },
    mixins: [publics],
    components: {},
    methods: {
        init() {
            getStorage("account")
                .then((res) => {
                    this.$store.commit("accountFun", res);
                })
                .catch((err) => {
                    this.replaceRouter("/login");
                });
            getStorage("name")
                .then((res) => {
                    this.$store.commit("nameFun", res);
                })
                .catch((err) => {});
            getStorage("avatar")
                .then((res) => {
                    this.$store.commit("avatarFun", res);
                })
                .catch((err) => {});
            getStorage("status")
                .then((res) => {
                    this.$store.commit("statusFun", res);
                })
                .catch((err) => {});
        },
        open_map(item) {
            this.jumpRouter("/home/map", item);
        },
        get_position() {
            // 获取地理位置
        },
    },
    created() {
        this.init();
        this.get_position();
    },
    computed: {
        account() {
            return this.$store.state.account;
        },
    },
    watch: {},
};
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: inherit;
    overflow-y: auto;
    position: relative;
    padding-top: 54px;
    background: rgb(250, 250, 250);
}
.content {
    width: 90%;
    border-radius: 12px;
    margin: 0 auto 12px auto;
    background: #ffffff;
    .order_btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 55px;
        margin: 0 auto;
        div:nth-child(2) {
            p {
                line-height: 32px;
                color: #00b075;
                font-size: 16px;
                text-align: center;
            }
        }
    }
    .top {
        padding-bottom: 5px;
        border-bottom: 1px solid #cccccc;
        div {
            width: 90%;
            margin: 0 auto;
            display: flex;
            align-content: center;
        }
        div:nth-child(1) {
            display: block;
            padding-top: 20px;
            p {
                width: 270px;
                vertical-align: top;
                display: inline-block;
                text-align: left;
            }
            img {
                display: inline-block;
                width: 32px;
                height: 32px;
            }
        }
        div:nth-child(2) {
            justify-content: left;
            margin-top: 5px;
            img {
                width: 16px;
                height: 16px;
            }
            p {
                text-align: left;
            }
            p:nth-child(2) {
                color: #b3b3b3;
                font-size: 14px;
                margin: 0 25px 0 5px;
            }
            p:nth-child(3) {
                color: #b3b3b3;
                font-size: 14px;
            }
        }
    }
}
.fulfil_mode {
    background: linear-gradient(
        87deg,
        rgba(210, 233, 221, 1) 0%,
        rgba(0, 176, 117, 0) 100%
    );
}
.topbar {
    width: 100%;
    height: 42px;
    padding: 0 5%;
    margin-bottom: 12px;
    background: #ffffff;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 999;
    justify-content: space-between;
    align-content: center;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-top: 5px;
    }
    p {
        line-height: 42px;
        font-size: 16px;
    }
}
</style>
