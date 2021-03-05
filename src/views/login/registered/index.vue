<template>
    <view class="box_percentage">
        <registered
            :title="{ head: '注册', content: '请输入手机号进行注册' }"
            :verific="verific"
            :verify="verify"
            :complete="complete"
        />
    </view>
</template>

<script>
import registered from "../component/registered";
import public_mixin from "@/mixins/public.js";
import { sendCode, verificationCode, createUser } from "@/api/mapi";
import ecc from "eosjs-ecc/lib";
const { PrivateKey } = ecc;

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

                sendCode(data)
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

                verificationCode(data)
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
        async complete(val) {
            //完成
            const buff = (await PrivateKey.randomKey()).toBuffer();
            const privateKey = ecc.PrivateKey.fromBuffer(
                new Buffer(buff)
            ).toString();
            const publicKey = ecc
                .PrivateKey(privateKey)
                .toPublic()
                .toString("BAZ");
            return new Promise((resolve, reject) => {
                let data = {
                    phone: val.phone_number,
                    password: val.password,
                    publickey: publicKey,
                };

                createUser(data)
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
