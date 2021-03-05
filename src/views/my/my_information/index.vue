<template>
    <div class="my_information">
        <div class="avatar" @click="avatarChoose">
            <p>头像</p>
            <div>
                <img  :src="account.avatar" />
            </div>
            <img
                
                src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
            />
        </div>
        <div class="row">
            <p>登录手机号</p>
            <p class="font_gray_1">{{account.phone}}</p>
            <img
                
                src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
            />
        </div>
        <div class="row" @click="popup_show = true">
            <p>用户昵称</p>
            <p class="font_gray_1">{{account.name}}</p>
            <img
                
                src="https://img.sporeblockchain.cn/static/my/icon_next_gray@3x.png"
            />
        </div>
        <popupEnter v-if="popup_show" :list="popup_data" @confirm="confirm" @close="close" />
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";
import popupEnter from "@/component/popup-enter/index";
import { setStorage } from "@/utils/storage/storage.js";

export default {
    data() {
        return {
            popup_data: {
                title: "修改昵称",
                placeholder: "昵称字数不超过20个字符",
                btn: "确认修改",
            },
            popup_show: false,
        };
    },
    components: {
        popupEnter,
    },
    mixins: [public_mixin],
    methods: {
        confirm(val) {
            // let data = {
            //     applets: this.$store.state.account.account,
            //     nick_name: val,
            // };
            // changeNickName(data)
            //     .then((res) => {
            //         let that = this;
            //         that.$store.commit("nameFun", res.data.nick_name);
            //         setStorage("nameFun", res.data.nick_name);
            //         that.popup_show = false;
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
        },
        close() {
            this.popup_show = false;
        },
        avatarChoose() {
            let that = this;
            uni.chooseimg({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success(res) {
                    that.imgUpload(res.tempFilePaths);
                    console.log(1, res.tempFilePaths);
                },
            });
        },
        imgUpload(file) {
            let that = this;
            uni.uploadFile({
                header: {},
                url: "https://mapi.sporeblockchain.cn/v1/uploadhead",
                filePath: file[0],
                name: "tupian",
                formData: {
                    applets: that.$store.state.account.account,
                },
                success: function (res) {
                    let img = JSON.parse(res.data);
                    that.$store.commit("avatarFun", img.data.headurl);
                    setStorage("avatar", img.data.headurl);
                },
                fail: function (error) {
                    console.log(error);
                },
            });
        },
    },
    created() {
  
    },
    computed: {
        account() {
            return this.$store.state.account;
        },
    },
};
</script>

<style  lang="scss">

.my_information {
    width: 100%;
    height: 100%;
    position: relative;
}
.avatar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 150px;
    margin: 0 auto;
    p:nth-child(1) {
        width: 620px;
        text-align: left;
        font-size: 32px;
        font-weight: 600;
        color: #242424;
    }
    div {
        width: 90px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    img:nth-child(3) {
        width: 40px;
        height: 40px;
    }
}
.row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 100px;
    margin: 0 auto;
    p:nth-child(1) {
        width: 300px;
        text-align: left;
        font-size: 32px;
        font-weight: 600;
        color: #242424;
    }
    p:nth-child(2) {
        font-size: 28px;
        text-align: right;
        width: 310px;
    }
    img:nth-child(3) {
        width: 40px;
        height: 40px;
    }
}
</style>
