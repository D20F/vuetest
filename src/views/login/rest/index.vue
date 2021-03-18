<template>
    <div class="box_percentage">
        <div class="login">
            <div v-if="step == 1">
                <div class="login_tab">
                    <p>重置密码</p>
                    <p>请输入手机号来帮你重置密码</p>
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
                    <div
                        @click="send_verific"
                        class="btn"
                        :class="{
                            background_color_bule_2: phone_mode,
                            background_color_gray_1: !phone_mode,
                        }"
                    >
                        <p>发送验证码</p>
                    </div>
                </div>
                <div class="protocol">
                    <img
                        v-if="protocol_mode"
                        @click="protocol_modeFun"
                        src="@/static/img/login/protocol.png"
                        mode=""
                    />
                    <img
                        v-else
                        @click="protocol_modeFun"
                        src="@/static/img/login/protocols.png"
                        mode=""
                    />
                    <p>已阅读和同意</p>
                    <p>《用户协议》</p>
                </div>
            </div>
            <div v-if="step == 2">
                <div class="login_tab">
                    <p>输入验证码</p>
                    <p>短信验证码已发送至 +86 {{ phone_number }}</p>
                </div>
                <div class="public_box">
                    <div class="input_box">
                        <input
                            v-model="verific_code"
                            class="input"
                            type="number"
                            maxlength="6"
                            placeholder="请输入验证码"
                        />
                        <p
                            class="font_gray_1 countdown"
                            v-if="getCode_time != 0"
                        >
                            {{ getCode_time }}
                        </p>
                        <p
                            class="font_bule_2 countdown"
                            v-if="getCode_time == 0"
                            @click="send_verific"
                        >
                            重新发送
                        </p>
                    </div>
                    <div
                        @click="send_verify"
                        class="btn"
                        :class="{
                            background_color_bule_2: verific_code.length > 5,
                            background_color_gray_1: verific_code.length < 6,
                        }"
                    >
                        <p>下一步</p>
                    </div>
                </div>
            </div>
            <div v-if="step == 3">
                <div class="login_tab">
                    <p>设置密码</p>
                    <p>密码长度8-16位数字，字母或符号中的两种组成</p>
                </div>
                <div class="public_box">
                    <div class="input_box">
                        <input
                            v-model="password"
                            class="input"
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
                    <div class="input_box">
                        <input
                            v-model="passwords"
                            class="input"
                            :type="input_passwords"
                            maxlength="16"
                            placeholder="请再次输入密码"
                        />
                        <img
                            v-if="input_passwords == 'text'"
                            @click="input_passwordsFun('password')"
                            src="@/static/img/login/eyes.png"
                        />
                        <img
                            v-else
                            @click="input_passwordsFun('text')"
                            src="@/static/img/login/eye.png"
                        />
                    </div>
                    <div
                        @click="send_complete"
                        class="btn"
                        :class="{
                            background_color_bule_2:
                                password.length > 7 &&
                                passwords.length > 7 &&
                                password.length == passwords.length,
                            background_color_gray_1: !(
                                password.length > 7 &&
                                passwords.length > 7 &&
                                password.length == passwords.length
                            ),
                        }"
                    >
                        <p>完成</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import { forgetCode, resetCode, modifyPassword } from "@/api/mapi";
import { setStorage } from "@/utils/storage/storage.js";

export default {
    data() {
        return {
            step: 1,
            protocol_mode: true, //用户协议显示
            getCode_time: 60, //获取验证码时间
            getCode_state: false, //
            phone_mode: false, //手机号码格式判断
            phone_number: "", //手机号
            verific_code: "", //验证码
            password: "", //密码
            passwords: "", //密码再次验证
            input_password: 'password', //input type 
            input_passwords: 'password', //input type 
        };
    },
    mixins: [public_mixin],
    components: {},
    created() {

    },
    methods: {
        protocol_modeFun() {
            this.protocol_mode = !this.protocol_mode;
        },
        input_passwordFun(val) {
            this.input_password = val;
        },
        input_passwordsFun(val) {
            this.input_passwords = val;
        },
        regular_phone(val) {
            const regex = /^1([3|4|5|7|8|])\d{9}$/;
            return regex.test(val);
        },
        send_verific() {
            if (!this.regular_phone(this.phone_number)) {
                return this.$toast({ content: "手机号格式错误" });
            }
            if (this.protocol_mode) {
                return this.$toast({ content: "用户协议未同意" });
            }
            this.$loading({
                content: "验证码发送中",
                mask: true,
            });

            let data = {
                phone: this.phone_number,
            };
            forgetCode(data)
                .then((res) => {
                    console.log("res", res);
                    this.$loadingHide();
                    if (res.status == 200) {
                        // 验证码发送成功
                        this.step = 2;
                    } else {
                        this.$toast({ content: "验证码发送失败" });
                    }
                })
                .catch((err) => {
                    this.$loadingHide();
                    this.$toast({ content: "验证码发送失败" });
                    console.log(err);
                });

            // 60秒计时
            this.getCode_time = 60;
            this.getCode_state = false;
            var interval = setInterval(() => {
                this.getCode_time = this.getCode_time - 1;
                if (this.getCode_time == 0) {
                    clearInterval(interval);
                    this.getCode_state = true;
                }
            }, 1000);
        },
        async send_verify() {
            if (this.verific_code.length < 6) {
                return;
            }

            this.$loading({
                content: "验证中",
                mask: true,
            });

            let data = {
                phone: this.phone_number,
                code: this.verific_code,
            };
            resetCode(data)
                .then((res) => {
                    console.log("res", res);
                    this.$loadingHide();

                    if (res.status == 200) {
                        // 验证码发送成功
                        this.step = 3;
                    } else {
                        this.$toast({ content: "验证码错误" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast({ content: "验证码错误" });
                    this.$loadingHide();
                });
        },
        async send_complete() {
            if (this.password.length < 7 && this.passwords.length < 7) {
                return this.$toast({ content: "密码小于8位" });
            }
            if (this.password != this.passwords) {
                return this.$toast({ content: "两次密码不一致" });
            }

            this.$loading({
                content: "请稍等",
                mask: true,
            });
            let data = {
                phone: this.phone_number,
                password: this.password,
            };

            modifyPassword(data)
                .then((res) => {
                    console.log("res", res);
                    this.$loadingHide();
                    if (res.status == 200) {
                        this.replaceRouter("/login");
                    } else {
                        this.$toast({ content: "系统繁忙,请重试" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.$loadingHide();
                    this.$toast({ content: "系统繁忙,请重试" });
                });
        },
    },
    watch: {
        phone_number: {
            handler(newVal) {
                if (this.regular_phone(newVal)) {
                    this.phone_mode = true;
                } else {
                    this.phone_mode = false;
                }
            },
        },
    },
};
</script>

<style scoped  lang="scss">
.box_percentage {
    width: 100%;
    height: 100%;
    position: relative;
}
.login {
    width: 100%;
    height: 100%;
    position: relative;
}
.login_tab {
    width: 80%;
    margin: 90px auto 0 auto;
    p:nth-child(1) {
        font-size: 24px;
        text-align: left;
        display: inline-block;
        font-weight: 600;
    }
    p:nth-child(2) {
        text-align: left;
        color: #c6c7ce;
        line-height: 50px;
    }
}
.protocol {
    width: 80%;
    text-align: left;
    margin: 25px auto 0 auto;
    p {
        font-size: 14px;
        display: inline;
        vertical-align: middle;
    }
    img {
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
    p:nth-child(2) {
        color: #c6c7ce;
    }
    p:nth-child(3) {
        color: #3d7eff;
    }
}
.public_box {
    width: 80%;
    margin: 50px auto 0 auto;
}
.blank {
    width: 100%;
    height: 75px;
    margin: 0 auto;
    p {
        color: #c6c7ce;
        line-height: 50px;
        text-align: right;
    }
}

.input_box {
    margin-bottom: 40px;
    width: 100%;
    height: 51px;
    background: #f5f6fb;
    border-radius: 12px;
    input {
        width: 80%;
        height: 51px;
        margin: 0 auto;
        vertical-align: middle;
        font-size: 16px;
        color: #1f2124;
    }
    img {
        position: absolute;
        width: 45px;
        height: 45px;
        top: 4%;
        right: 8%;
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
        font-size: 16px;
        color: #1f2124;
    }
    img {
        position: absolute;
        width: 45px;
        height: 45px;
        top: 4%;
        right: 8%;
    }
}

.countdown {
    position: absolute;
    line-height: 51px;
    right: 15px;
    top: 0;
}

.btn {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    margin: 0 auto;
    text-align: center;
    p {
        color: #ffffff;
        line-height: 45px;
        // letter-spacing: 20px;
        font-size: 16px;
    }
}

.getCode {
    position: absolute;
}
.background_color_bule_2 {
    background: #3d7eff;
}
.background_color_gray_1 {
    background: #ebecef;
}
</style>