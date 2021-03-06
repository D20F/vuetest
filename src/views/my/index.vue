<template>
    <div class="box_inherit">
        <div class="topbar">
            <div class="login" @click="jumpRouter('/my/my_information')">
                <img src="@/static/img/my/avatar.png" />
                <div>
                    <p>昵称</p>
                    <p>{{ 213131 }}</p>
                </div>
            </div>
        </div>
        <div class="card">
            <p>我的收益</p>
            <div>
                <p>￥</p>
                <p>121,21,21</p>
                <div>
                    <img src="@/static/img/my/card_right.png" />
                </div>
            </div>
        </div>
        <div class="features">
            <div
                class="vertical_columnImg_layout"
                v-for="(item, index) of list"
                :key="index"
                @click="jumpRouter(item.router)"
            >
                <div>
                    <img :src="item.src" />
                    <p>{{ item.title }}</p>
                </div>

                <img class="icon" src="@/static/img/my/icon_next_gray@3x.png" />
            </div>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";

export default {
    data() {
        return {
            list: [
                {
                    title: "设备管理",
                    router: "/my/equipment",
                    src: require("@/static/img/my/equipment.png"),
                    content: "",
                },
                {
                    title: "导出私钥",
                    router: "/my/export_privateKey",
                    src: require("@/static/img/my/export.png"),
                    content: "",
                },
                {
                    title: "关于我们",
                    router: "", //暂时无
                    src: require("@/static/img/my/user.png"),
                    content: "",
                },
                {
                    title: "设置",
                    router: "/my/my_setting",
                    src: require("@/static/img/my/setting.png"),
                    content: "",
                },
            ],
        };
    },
    mixins: [public_mixin],
    components: {},
    created() {

    },
    methods: {},
};
</script>

<style scoped lang="scss">
.box_inherit {
    width: 100%;
    height: 100%;
}
.topbar {
    width: 100%;
    padding-top: 20px;
    margin: 0px auto 25px auto;
    .no {
        margin: 0 auto;
        width: 90%;
        height: 72px;
        display: flex;
        justify-content: left;
        align-items: center;
        img {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            margin-right: 15px;
        }
        p {
            font-size: 24px;
            font-weight: 600;
            color: #1f2124;
        }
    }
    .login {
        margin: 0 auto;
        width: 90%;
        height: 72px;
        display: flex;
        justify-content: left;
        align-items: center;
        img {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            margin-right: 15px;
        }
        div {
            p:nth-child(1) {
                text-align: left;
                font-size: 24px;
                font-weight: 600;
                color: #1f2124;
            }
            p:nth-child(2) {
                text-align: left;
                font-size: 16px;
                color: #1f2124;
            }
        }
    }
}
.card {
    width: 90%;
    margin: 0 auto 25px auto;
    padding: 0 15px;
    height: 140px;
    background: url("../../static/img/my/card_pg.png") no-repeat;
    background-size: 100%;
    p:nth-child(1) {
        text-align: left;
        font-size: 16px;
        color: #eb782b;
        line-height: 75px;
    }
    div:nth-child(2) {
        display: flex;
        justify-content: left;
        align-items: baseline;
        p:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            color: #eb782b;
            line-height: 0px;
        }
        p:nth-child(2) {
            font-size: 32px;
            font-weight: 600;
            color: #eb782b;
        }
        div:nth-child(3) {
            position: absolute;
            right: 0;
            top: 10px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #fcf3e2;
            img {
                width: 24px;
                height: 24px;
            }
        }
    }
}
.features {
    width: 90%;
    margin: 0 auto;
    .vertical_columnImg_layout {
        display: flex;
        width: 100%;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        div:nth-child(1) {
            display: flex;
            align-items: center;
            img:nth-child(1) {
                width: 24px;
                height: 24px;
                margin-right: 25px;
            }
            p:nth-child(2) {
                width: 150px;
                text-align: left;
                font-weight: 600;
                font-size: 16px;
                color: #1f2124;
            }
        }
        .icon {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
