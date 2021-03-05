<template>
    <div class="box_inherit">
        <div class="topbar">
            <p
                @click="select_index(1)"
                :class="{
                    blacks: current_index == 1,
                    gary: current_index !== 1,
                }"
            >
                全部
            </p>
            <p
                @click="select_index(2)"
                :class="{
                    blacks: current_index == 2,
                    gary: current_index !== 2,
                }"
            >
                进行中
            </p>
            <p
                @click="select_index(3)"
                :class="{
                    blacks: current_index == 3,
                    gary: current_index !== 3,
                }"
            >
                已完成
            </p>
            <p
                @click="select_index(4)"
                :class="{
                    blacks: current_index == 4,
                    gary: current_index !== 4,
                }"
            >
                已终止
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
                <card
                    v-for="(item, index) in all"
                    @popup="popup"
                    :key="index"
                    :list="item"
                />
            </swiper-item>
            <swiper-item class="swiper_item">
                <card
                    v-for="(item, index) in processing"
                    :key="index"
                    :list="item"
                    @popup="popup"
                />
            </swiper-item>
            <swiper-item class="swiper_item">
                <card
                    v-for="(item, index) in completed"
                    :key="index"
                    :list="item"
                    @popup="popup"
                />
            </swiper-item>
            <swiper-item class="swiper_item">
                <card
                    v-for="(item, index) in terminated"
                    :key="index"
                    :list="item"
                    @popup="popup"
                />
            </swiper-item>
        </swiper>

        <detail
            v-show="detail_show"
            :detailList="detailList"
            @detail_showFun="detail_showFun"
        />
    </div>
</template>
<script>
import card from "./card";
import detail from "./detail";
import public_mixin from "@/mixins/public.js";
import miner from "@/mixins/miner.js";

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
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: false,
                },
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: true,
                },
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: true,
                },
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: true,
                },
                {
                    title: "dsdsadsa",
                    time: "sdads",
                    mode: true,
                },
            ],
            processing: [],
            completed: [],
            terminated: [],
            detailList: {},
            detail_show: false,
        };
    },
    components: {
        card,
        detail,
    },
    mixins: [public_mixin, miner],
    onLoad() {},
    methods: {
        select_index(val) {
            this.current_index = val;
        },
        change(e) {
            this.current_index = e;
        },
        popup(val) {
            this.detailList = val;
            this.detail_show = true;
        },
        detail_showFun() {
            this.detail_show = false;
        },
        bind() {
            this.$router.push({ path: "/equipment/bind" });
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
    margin: 0 auto;
    padding-top: 20px;

    p {
        margin-right: 15px;
        vertical-align: bottom;
        display: inline-block;
    }
    img {
        position: absolute;
        top: 20px;
        right: 0;
        width: 20px;
        height: 20px;
    }
    .blacks {
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
        padding-top: 12px;
        overflow-y: auto;
    }
}
.no_bind {
    margin-top: 200px;
    div:nth-child(2) {
        width: 30%;
        height: 35px;
        margin: 0 auto;
        border-radius: 8px;
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
