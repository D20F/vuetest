<template>
    <div class="login">
        <div v-if="step == 1">
            <div class="login_tab">
                <p>{{ title.head }}</p>
                <p>{{ title.content }}</p>
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
                        >{{ getCode_time }}</p
                    >
                    <p
                        class="font_bule_2 countdown"
                        v-if="getCode_time == 0"
                        @click="send_verific"
                        >重新发送</p
                    >
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
                        type="p"
                        maxlength="16"
                        :password="input_password"
                        placeholder="请输入密码"
                    />
                    <img
                        v-if="input_password"
                        @click="input_passwordFun"
                        src="@/static/img/login/eye.png"
                    />
                    <img
                        v-else
                        @click="input_passwordFun"
                        src="@/static/img/login/eyes.png"
                    />
                </div>
                <div class="input_box">
                    <input
                        v-model="passwords"
                        class="input"
                        type="p"
                        maxlength="16"
                        :password="input_passwords"
                        placeholder="请再次输入密码"
                    />
                    <img
                        v-if="input_passwords"
                        @click="input_passwordsFun"
                        src="@/static/img/login/eye.png"
                    />
                    <img
                        v-else
                        @click="input_passwordsFun"
                        src="@/static/img/login/eyes.png"
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
                    <p>注册并登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import { setStorage } from "@/utils/storage/storage.js";

export default {
    props: {
        title: {
            type: Object,
            default: "",
        },
        verific: {
            //发送验证码
            type: Function,
            default: () => {},
        },
        verify: {
            //效验验证码
            type: Function,
            default: () => {},
        },
        complete: {
            //完成
            type: Function,
            default: () => {},
        },
    },
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
            input_password: true, //input type 密码属性
            input_passwords: true, //input type 密码属性
        };
    },
    mixins: [public_mixin],
    methods: {
        protocol_modeFun() {
            this.protocol_mode = !this.protocol_mode;
        },
        input_passwordFun() {
            this.input_password = !this.input_password;
        },
        input_passwordsFun() {
            this.input_passwords = !this.input_passwords;
        },
        regular_phone(val) {
            const regex = /^1([3|4|5|7|8|])\d{9}$/;
            return regex.test(val);
        },
        send_verific() {
            if (!this.regular_phone(this.phone_number)) {
                return uni.showToast({
                    title: "手机号格式错误",
                    icon: "none",
                    duration: 2000,
                });
            }
            if (this.protocol_mode) {
                return uni.showToast({
                    title: "用户协议未同意",
                    icon: "none",
                    duration: 2000,
                });
            }
            uni.showLoading({
                title: "验证码发送中",
                mask: true,
            });

            this.verific({
                phone_number: this.phone_number,
            })
                .then((res) => {
                    // 验证码发送成功
                    this.step = 2;
                    uni.hideLoading();
                })
                .catch((err) => {
                    console.log(err);
                    uni.hideLoading();
                    uni.showToast({
                        title: "验证码发送失败",
                        icon: "none",
                        duration: 2000,
                    });
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
            uni.showLoading({
                title: "验证中",
                mask: true,
            });
            this.verify({
                verific_code: this.verific_code,
                phone_number: this.phone_number,
            })
                .then((res) => {
                    // 验证码效验成功
                    this.step = 3;
                    uni.hideLoading();
                })
                .catch((err) => {
                    console.log(err);
                    uni.hideLoading();
                    uni.showToast({
                        title: "验证码错误",
                        icon: "none",
                        duration: 2000,
                    });
                });
        },
        async send_complete() {
            if (this.password.length < 7 && this.passwords.length < 7) {
                return uni.showToast({
                    title: "密码小于8位",
                    icon: "none",
                });
            }
            if (this.password != this.passwords) {
                return uni.showToast({
                    title: "两次密码不一致",
                    icon: "none",
                });
            }
            uni.showLoading({
                title: "请稍等",
                mask: true,
            });
            this.complete({
                verific_code: this.verific_code,
                phone_number: this.phone_number,
                password: this.password,
            })
                .then((res) => {
                    // 完成
                    uni.hideLoading();
                })
                .catch((err) => {
                    uni.hideLoading();
                    this.step = 1;
                    console.log(err);
                    uni.showToast({
                        title: "失败,请重试",
                        icon: "none",
                        duration: 2000,
                    });
                });
        },
    },
    created() {},
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

<style scoped lang="scss">

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
</style>
