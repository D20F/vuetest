<template>
    <div class="box">
        <registered
            :title="{ head: '修改密码', content: '请输入手机号进行重置' }"
            :verific="verific"
            :verify="verify"
            :complete="complete"
        />
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import registered from "@/views/login/component/registered";

export default {
    name: "modify_password",
    data() {
        return {};
    },
    components: {
        registered,
    },
    mixins: [public_mixin],
    methods: {
        verific(val) { //发送验证码
            return new Promise((resolve, reject) => {
                console.log(val)

                // let data = {
                //     phone: this.phone_number,
                // };
                // 发送验证码
                // getVerificationCode(data)
                //     .then((res) => {
                //         console.log("res", res);
                //         resolve(res);
                //     })
                //     .catch((err) => reject(err));
            });
        },
        verify(val) { //效验验证码
            return new Promise((resolve, reject) => {
                // let data = {
                //     phone: this.phone_number,
                // };
                // 发送验证码
                // getVerificationCode(data)
                //     .then((res) => {
                //         console.log("res", res);
                //         resolve(res);
                //     })
                //     .catch((err) => reject(err));
            });
        },
        complete(val) { //完成
            return new Promise((resolve, reject) => {
                // let data = {
                //     phone: this.phone_number,
                // };
                // 发送验证码
                // getVerificationCode(data)
                //     .then((res) => {
                //         console.log("res", res);
                //         resolve(res);
                //     })
                //     .catch((err) => reject(err));
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
</style>
