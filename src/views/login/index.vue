<template>
    <div class="login">
        <div class="login_tab">
            <p>欢迎登录</p>
        </div>

        <div class="public_box">
            <div class="input_box">
                <input
                    v-model="phone_number"
                    class="input"
                    type="number"
                    placeholder="请输入手机号"
                />
            </div>
            <div class="password_box">
                <input
                    v-model="password"
                    :type="input_password"
                    maxlength="16"
                    placeholder="请输入密码"
                />
                <img
                    v-if="input_password == 'text'"
                    @click="input_passwordFun('password')"
                    src="@/static/img/login/eyes.png"
                />
                <img
                    v-else
                    @click="input_passwordFun('text')"
                    src="@/static/img/login/eye.png"
                />
            </div>
            <div @click="jumpRouter('/login/rest')" class="blank">
                <p>忘记密码</p>
            </div>
            <div
                @click="confirm"
                class="btn"
                :class="{
                    background_color_bule_2: password.length > 0,
                    background_color_gray_1: password.length == 0,
                }"
            >
                <p>登录</p>
            </div>
            <div class="blank_2"></div>
        </div>
        <p class="protocol" @click="jumpRouter('/login/registered')">
            <span>还没有账号？</span>
            <span>立即注册</span>
        </p>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import { setStorage } from "@/utils/storage/storage.js";
import { setToken } from "@/utils/cookie";
import { login } from "@/api/mapi";

export default {
    data() {
        return {
            input_password: "password", //input type 密码属性
            phone_number: "", //手机号
            password: "", //密码
        };
    },
    mixins: [public_mixin],
    methods: {
        input_passwordFun(val) {
            this.input_password = val;
        },
        regular_phone(val) {
            const regex = /^1([3|4|5|7|8|])\d{9}$/;
            return regex.test(val);
        },
        async confirm() {
            if (!this.regular_phone(this.phone_number)) {
                return this.$toast({ content: "手机号格式错误" });
            }
            if (this.password.length < 7) {
                return this.$toast({ content: "密码小于8位" });
            }
            let that = this;

            this.$loading({
                content: "登录中",
                mask: true,
            });

            // 待修改
            let data = {
                phone: this.phone_number,
                password: this.password,
            };
            login(data)
                .then((res) => {
                    this.$loadingHide();
                    if (res.status == 200) {
                        // console.log(res);

                        setStorage("account", res.data.account);
                        setStorage("phone", that.phone_number);
                        setStorage("avatar", res.data.headUrl);
                        setStorage("name", res.data.nickName);
                        setToken(res.data.token);

                        that.jumpRouter("/");
                    } else {
                        this.$toast({ content: "密码错误" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.$loadingHide();
                    this.$toast({ content: "登陆失败，请重新登录" });
                });
        },
    },
    created() {

    },
};
</script>

<style scoped  lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: relative;
}
.login_tab {
    width: 80%;
    padding-top: 90px;
    margin: 0 auto;
    p {
        font-size: 24px;
        text-align: left;
        display: inline-block;
        font-weight: 600;
    }
}
.protocol {
    width: 100%;
    text-align: center;
    font-size: 10px;
    margin-top: 25px;
    p {
        font-size: 10px;
        display: inline;
    }
    span:nth-child(1) {
        color: #c6c7ce;
    }
    span:nth-child(2) {
        color: #3d7eff;
    }
}
.public_box {
    width: 80%;
    margin: 0 auto;
}
.blank {
    width: 100%;
    height: 75px;
    margin: 0 auto;
    p {
        color: #c6c7ce;
        line-height: 50px;
        text-align: right;
        font-size: 15px;
    }
}

.input_box {
    margin-top: 50px;
    width: 100%;
    height: 51px;
    background: #f5f6fb;
    border-radius: 12px;
    input {
        width: 80%;
        height: 51px;
        margin: 0 auto;
        vertical-align: middle;
        color: #1f2124;
        font-size: 15px;
    }
}
.password_box {
    margin-top: 25px;
    width: 100%;
    height: 51px;
    background: #f5f6fb;
    border-radius: 12px;
    input {
        width: 80%;
        height: 51px;
        margin: 0 auto;
        vertical-align: middle;
        color: #1f2124;
        font-size: 15px;
    }
    img {
        position: absolute;
        width: 45px;
        height: 45px;
        top: 4%;
        right: 8%;
    }
}

.btn {
    width: 100%;
    height: 45px;
    border-radius: 7px;
    margin: 0 auto;
    text-align: center;
    p {
        color: #ffffff;
        line-height: 45px;
        letter-spacing: 10px;
        font-size: 16px;
    }
}
.background_color_bule_2 {
    background: #3d7eff;
}
.background_color_gray_1 {
    background: #ebecef;
}
</style>
