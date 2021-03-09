<template>
    <div class="box_inherit">
        <div v-if="list.length == 0" class="no_bind">
            <p>您还没有设备哦~</p>
            <div @click="bind">
                <p>绑定设备</p>
            </div>
        </div>
        <div class="swiper" v-else>
            <card v-for="(item, index) in list" :key="index" :list="item" />
        </div>
    </div>
</template>
<script>
import card from "./card";
import public_mixin from "@/mixins/public.js";
import miner from "@/mixins/miner.js";

export default {
    data() {
        return {
            list: [
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
        };
    },
    components: {
        card,
    },
    mixins: [public_mixin, miner],

    created() {
   
    },
    methods: {},
};
</script>

<style scoped  lang="scss">
.box_inherit {
    width: 100%;
    height: 100%;
    background: #fafbfc;
}
.swiper {
    width: 100%;
    height: 100%;
    padding-top: 12px;
    overflow-y: auto;
}
.no_bind {
    margin-top: 400px;
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
