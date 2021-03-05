<template>
    <view class="box_percentage">
        <registered
            :title="{ head: '重置密码', content: '请输入手机号来帮你重置密码' }"
            :verific="verific"
            :verify="verify"
            :complete="complete"
        />
    </view>
</template>

<script>
import registered from "../component/registered";
import public_mixin from "@/mixins/public.js";
import { forgetCode, resetCode, modifyPassword } from "@/api/mapi";

export default {
    data() {
        return {};
    },
    mixins: [public_mixin],

    components: {
        registered,
    },
    onLoad() {},

    methods: {
        verific(val) {
            //发送验证码
            return new Promise((resolve, reject) => {
                let data = {
                    phone: val.phone_number,
                };

                forgetCode(data)
                    .then((res) => {
                        console.log("res", res);
                        if (res.status == 200) {
                            resolve(res);
                        } else {
                            reject(err);
                        }
                    })
                    .catch((err) => reject(err));
            });
        },
        verify(val) {
            //效验验证码
            return new Promise((resolve, reject) => {
                let data = {
                    phone: val.phone_number,
                    code: val.verific_code,
                };

                resetCode(data)
                    .then((res) => {
                        console.log("res", res);
                        if (res.status == 200) {
                            resolve(res);
                        } else {
                            reject(err);
                        }
                    })
                    .catch((err) => reject(err));
            });
        },
        complete(val) {
            //完成
            return new Promise((resolve, reject) => {
                let data = {
                    phone: val.phone_number,
                    password: val.password,
                };

                modifyPassword(data)
                    .then((res) => {
                        console.log("res", res);
                        if (res.status == 200) {
                            this.jumpRouters("/pages/login/index");
                            resolve(res);
                        } else {
                            reject(err);
                        }
                    })
                    .catch((err) => reject(err));
            });
        },
    },
};
</script>

<style scoped  lang="scss">

</style>
