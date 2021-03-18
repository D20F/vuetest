<template>
    <div class="box_inherit background_color_gray_8">
        <div class="topbar">
            <p
                @click="select_index(1)"
                :class="{
                    colorBlack: current_index == 1,
                    gary: current_index !== 1,
                }"
            >
                全部
            </p>
            <p
                @click="select_index(2)"
                :class="{
                    colorBlack: current_index == 2,
                    gary: current_index !== 2,
                }"
            >
                运行中
            </p>
            <p
                @click="select_index(3)"
                :class="{
                    colorBlack: current_index == 3,
                    gary: current_index !== 3,
                }"
            >
                关闭中
            </p>
            <img @click="bind" src="@/static/img/equipment/add.png" />
        </div>

        <div v-if="all.length == 0" class="no_bind">
            <p>您还没有绑定设备哦~</p>
            <div @click="bind">
                <p>绑定设备</p>
            </div>
        </div>

        <swiper @change="change" :index="current_index" class="swiper">
            <swiper-item class="swiper_item">
                <card v-for="(item, index) in all" :key="index" :list="item" />
            </swiper-item>
            <swiper-item class="swiper_item">
                <card v-for="(item, index) in run" :key="index" :list="item" />
            </swiper-item>
            <swiper-item class="swiper_item">
                <card
                    v-for="(item, index) in close"
                    :key="index"
                    :list="item"
                />
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import card from "./card";
import public_mixin from "@/mixins/public.js";
import miner from "@/mixins/miner.js";
import { getStorage } from "@/utils/storage/storage.js";

export default {
    data() {
        return {
            current_index: 1,
            all: [
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: true,
                },
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: false,
                },
            ],
            run: [],
            close: [],
        };
    },
    components: {
        card,
    },
    mixins: [public_mixin, miner],
    created() {
        this.init();
    },
    methods: {
        select_index(val) {
            this.current_index = val;
        },
        change(e) {
            this.current_index = e;
        },
        bind() {
            this.$router.push({ path: "/equipment/bind" });
        },
   
        init() {
            getStorage("phone")
                .then((res) => {
                    this.$store.commit("phoneFun", res);
                })
                .catch((err) => {
                    this.replaceRouter("/login")
                });
            getStorage("account")
                .then((res) => {
                    this.$store.commit("accountFun", res);
                })
                .catch((err) => {});
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
        },
    },
};
</script>

<style scoped  lang="scss">
.box_inherit {
    width: 100%;
    height: 100%;
    background: #fafbfc;
}
.topbar {
    width: 90%;
    margin: 0px auto 0 auto;
    padding-top: 20px;
    p {
        margin-right: 30px;
        vertical-align: bottom;
        display: inline-block;
    }
    img {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
    }
    .colorBlack {
        font-size: 20px;
        font-weight: 600;
        color: #1f2124;
    }
    .gary {
        font-size: 17px;
        color: #c6c7ce;
    }
}
.swiper {
    width: 100%;
    height: 95%;
    .swiper_item {
        overflow-y: auto;
    }
}
.no_bind {
    margin-top: 400px;
    div:nth-child(2) {
        width: 30%;
        height: 35px;
        margin: 0 auto;
        border-radius: 7.5px;
        background: #3d7eff;
        text-align: center;
        p {
            color: #ffffff;
            line-height: 35px;
            font-size: 16px;
        }
    }
}
</style>
