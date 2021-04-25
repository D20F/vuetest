<template>
    <div class="login">
        <div class="login_tab">
            <p>登录</p>
        </div>


        <!-- fouse -->
        <!-- blur -->



        <div class="public_box">
            <div class="input_box">
                <p class="unip_left">手机号</p>
                <input
                    v-model="number"
                    type="text"
                    maxlength="11"
                    placeholder="请输入您的手机号"
                    @focus=" tip = false"
                    @blur=" tip = true"
                />
            </div>
            <div class="input_box">
                <p class="unip_left">密码</p>
                <input
                    v-model="password"
                    type="password"
                    maxlength="15"
                    placeholder="请输入您登录密码"
                    @focus=" tip = false"
                    @blur=" tip = true"
                />
            </div>
            <div class="blank"></div>
            <div @click="confirm" class="btn">
                <p>登录</p>
            </div>
            <div class="blank_2"></div>
        </div>

        <div v-show="tip" class="protocol">
            登录代表您已同意
            <p>用户协议</p>
            <p>和</p>
            <p>隐私协议</p>
        </div>
    </div>
</template>

<script>
import publics from "@/mixins/public.js";
import { login } from "@/api/mapi";
import { setStorage } from "@/utils/storage/storage.js";

export default {
    data() {
        return {
            tip: true, 
            number: "", //手机号    fangbo
            password: "", //密码    xiaoqu123456
        };
    },
    mixins: [publics],
    methods: {
        confirm() {
            let data = {
                account: this.number,
                password: this.password,
            };
            this.$loading({
                content: "登录中",
                mask: true,
                icon: true,
            });
            login(data)
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        setStorage("account", res.data.applets);
                        setStorage("name", res.data.nickname);
                        setStorage(
                            "avatar",
                            require("@/static/img/my/avatar.png")
                        );
                        setStorage("status", res.data.status);

                        this.$store.commit("accountFun", res.data.applets);
                        this.$store.commit("nameFun", res.data.nickname);
                        this.$store.commit(
                            "avatarFun",
                            require("@/static/img/my/avatar.png")
                        );
                        this.$store.commit("statusFun", res.data.status);

                        this.replaceRouter("/");
                    } else {
                        this.$toast({
                            content: "登录失败",
                        });
                    }
                    this.$loadingHide();
                })
                .catch((err) => {
                    this.$loadingHide();

                    this.$toast({
                        content: "登录失败",
                    });
                    console.log(err);
                });
        },
    },
    created() {},
};
</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: inherit;
    overflow-y: auto;
    position: relative;
}
.public_box {
    width: 80%;
    margin: 0 auto;
}
.login_tab {
    width: 80%;
    margin: 60px auto 0 auto;
    p {
        font-size: 25px;
        text-align: left;
        display: inline-block;
        font-weight: 600;
    }
    p:nth-child(2) {
        margin: 0 15px;
    }
}
.blank {
    width: 100%;
    height: 100px;
}
.blank_2 {
    width: 100%;
    height: 35px;
}

.input_box {
    margin-top: 10px;
    p:nth-child(1) {
        margin: 25px 0;
    }
    input {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        // background: #eeeeee;
        width: 100%;
        border-radius: 8px;
        height: 50px;
    }
}

.protocol {
    width: 75%;
    position: fixed;
    bottom: 20px;
    left: 12.5%;
    text-align: center;
    font-size: 12px;
    p {
        font-size: 12px;
        display: inline;
    }
    p:nth-child(1) {
        color: #00b075;
    }
    p:nth-child(3) {
        color: #00b075;
    }
}
.btn {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0px 2px 20px -5px #00b075;
    text-align: center;
    background: #00b075;
    p {
        color: #ffffff;
        line-height: 45px;
        letter-spacing: 10px;
        font-size: 18px;
    }
}
.unip_left {
    text-align: left;
}
</style>
