<template>
    <div class="box">
        <img
            class="logo"
            src="https://img.sporeblockchain.cn/static/my/mySetting/xiaoqu.png"
            mode=""
        />
        <div class="block">
            <div>
                <img
                    src="https://img.sporeblockchain.cn/static/my/mySetting/wx.png"
                    mode=""
                />
            </div>
            <div>
                <p class="font_weight_black1_32">联系电话</p>
                <p class="font_black1_32">400-832-0996</p>
                <p class="font_gray1_28">周一至周日 9:00-18:00</p>
            </div>
        </div>
        <div class="block">
            <div>
                <img
                    src="https://img.sporeblockchain.cn/static/my/mySetting/phone.png"
                    mode=""
                />
            </div>
            <div>
                <p class="font_weight_black1_32">官方微信公众号</p>
                <p class="font_gray1_28">
                    第一步：微信搜索框输入“<span
                        style="color: #00b075; display: inline"
                        >小蛐</span
                    >
                </p>
                <p class="font_gray1_28">第二步：点击“搜一搜”</p>
                <p class="font_gray1_28">第三步：关注小蛐公众号</p>
            </div>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";

export default {
    name: "aboutUs",
    data() {
        return {};
    },
    mixins: [public_mixin],
    methods: {},
    onLoad() {},
};
</script>

<style  lang="scss">
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.logo {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
}
.block {
    width: 90%;
    padding: 15px 15px;
    display: flex;
    margin: 35px auto 0 auto;
    background: #fafafa;
    border-radius: 12px;
    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    p {
        margin-bottom: 7.5px;
        text-align: left;
    }
}
.font_weight_black1_32 {
    color: #242424;

    font-weight: 600;
    font-size: 16px;
}
.font_black1_32 {
    color: #242424;
    font-size: 16px;
}
.font_gray1_28 {
    color: #cccccc;
    font-size: 14px;
}
</style>
