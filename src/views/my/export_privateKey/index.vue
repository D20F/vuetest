<template>
    <div class="box">
        <verification
            v-show="password_show"
            :list="{ placeholder: '请输入登陆密码', title: '验证密码' }"
            @confirm="confirm"
            @close="close"
        />
        <privateKey v-show="!password_show" />
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import verification from "./verification/index";
import privateKey from '@/component/export-privateKey'
export default {
    name: "export_privateKey",
    components: {
        verification,
        privateKey,
    },
    data() {
        return {
            password_show: true,
        };
    },
    mixins: [public_mixin],
    methods: {
        confirm(val){
            console.log(val)
            this.password_show = false
        },
        close(){
            this.$router.go(-1);
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
