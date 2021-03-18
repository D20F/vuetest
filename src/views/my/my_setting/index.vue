<template>
    <div class="box">
        <div
            class="row"
            @click="jumpRouter('/login/rest')"
        >
            <p>修改密码</p>
            <img
                src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
            />
        </div>
        <div
            class="row"
            @click="jumpRouter('/my/my_setting/protocol')"
        >
            <p>用户协议</p>
            <img
                src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
            />
        </div>
        <div class="row">
            <p>当前版本</p>
            <div class="version">
                <p>当前版本</p>
                <img
                    src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
                />
            </div>
        </div>
        <div class="quit" @click="confirm">
            <p>退出登录</p>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import { removeToken } from "@/utils/cookie";

export default {
    name: "my_setting",
    components: {},
    data() {
        return {
            popup_show: false,
            isLogin: false,
        };
    },
    mixins: [public_mixin],
    methods: {
        confirm() {
            uni.showModal({
                title: "",
                content: "确定退出登录",
                success: function (res) {
                    if (res.confirm) {
                        console.log("用户点击确定");
                        removeToken();
                        this.$store.commit("phoneFun", "");
                        this.$store.commit("accountFun", "");
                        this.$store.commit("nameFun", "");
                        this.$store.commit("avatarFun", "");
                        setStorage("account", "");
                        setStorage("phone", "");
                        setStorage("avatar", "");
                        setStorage("name", "");
                        this.jumpRouters("/pages/login/index");
                    } else if (res.cancel) {
                        console.log("用户点击取消");
                    }
                },
            });
        },
    },
    onLoad() {},
};
</script>

<style  lang="scss">

.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: 0 auto;
    p:nth-child(1) {
        // width: 300px;
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        color: #242424;
    }
    img:nth-child(2) {
        width: 20px;
        height: 20px;
    }
    .version {
        display: flex;
        p {
            font-weight: 200;
            font-size: 16px;
            color: #c6c7ce;
        }
    }
}
.quit {
    width: 90%;
    height: 56px;
    margin: 0 auto;
    border: 1px solid #c6c7ce;
    border-radius: 12px;
    margin-top: 25px;
    text-align: center;
    p {
        line-height: 56px;

        font-size: 16px;
        color: #ff6363;
    }
}
</style>
