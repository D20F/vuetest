<template>
    <div class="box">
        <div v-if="mode" class="machine-state">
            <img src="@/static/img/equipment/success.png" />
            <p>恭喜您，矿机绑定成功</p>
            <p>3s后回到首页</p>
            <div @click="back">
                <p>确定</p>
            </div>
        </div>
        <div v-else class="machine-state">
            <img src="@/static/img/equipment/error.png" />
            <p>很遗憾，矿机绑定失败</p>
            <p>3s后回到首页</p>
            <div @click="bind">
                <p>重新绑定</p>
            </div>
        </div>
    </div>
</template>
<script>
import public_mixin from "@/mixins/public.js";
import miner from "@/mixins/miner.js";

export default {
    data() {
        return {
            mode: true,
        };
    },
    mixins: [public_mixin,miner],
    components: {},
    created() {
        let data = this.$route.params;
        if (data == "success") {
            this.mode = true;
        } else {
            this.mode = false;
        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
};
</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
}
.machine-state {
    width: 100%;
    img:nth-child(1) {
        width: 72px;
        height: 72px;
        margin: 100px auto 0 auto;
        display: block;
    }
    p{
        text-align: center;
    }
    p:nth-child(2) {
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
        color: #1f2124;
    }
    p:nth-child(3) {
        font-size: 14px;
        font-weight: 600;
        line-height: 60px;
        color: #c6c7ce;
    }
    div:nth-child(4) {
        width: 30%;
        height: 35px;
        margin: 120px auto 0 auto;
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
