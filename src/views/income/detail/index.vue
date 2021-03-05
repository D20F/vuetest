<template>
    <div class="detail_box">
        <div class="topbar">
            <img
                @click="detail_showFun"
                src="@/static/img/income/close.png"
            />
            <p v-if="1">交易成功</p>
            <p v-if="0">交易终止</p>
            <p v-if="0">交易进行中</p>
        </div>
        <div class="title">
            <p>矿机编号</p>
            <p>{{ detailList.title }}</p>
        </div>
        <div class="detail">
            <div>
                <p>收益详情</p>
            </div>
            <div>
                <p>挑战次数: </p>
                <p>{{ detailList.title }}次</p>
            </div>
            <div>
                <p>挑战成功次数: </p>
                <p>{{ detailList.title }}次</p>
            </div>
            <div>
                <p> 挑战总收益：</p>
                <p>￥ {{ detailList.title }}</p>
            </div>
        </div>
        <div class="content">
            <div>
                <p>订单信息</p>
            </div>
            <div class="row">
                <p>储存时间 </p>
                <p>{{ detailList.title }}年</p>
            </div>
            <div class="row">
                <p>订单备份数量 </p>
                <p>{{ detailList.title }}</p>
            </div>
            <div class="row">
                <p>占用空间 </p>
                <p>{{ detailList.title }}GB</p>
            </div>
            <div>
                <p>订单编号 </p>
                <p>{{ detailList.title }}</p>
                <p @click="copy">复制</p>
            </div>
            <div class="row">
                <p>开始时间</p>
                <p>{{ detailList.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import public_mixin from "@/mixins/public.js";

export default {
    data() {
        return {};
    },
    props: {
        detailList: {
            type: Object,
        },
    },
    mixins: [public_mixin],
    onLoad() {},
    methods: {
        detail_showFun() {
            this.$emit("detail_showFun");
        },
        copy() {
            uni.setClipboardData({
                data: "111",
                success: function () {
                    uni.showToast({
                        icon: "none",
                        title: "复制成功",
                    });
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.detail_box {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #e4f1ff 0%, #fafbfc 100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}
.topbar {
    width: 90%;
    height: 90px;
    margin: 25px auto 0 auto;
    img {
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
    }
    p {
        text-align: left;
        font-size: 24px;
        font-weight: 600;
        color: #1f2124;
    }
}
.title {
    width: 90%;
    height: 86px;
    margin: 0 auto 15px auto;
    padding: 0 15px;
    background: #ffffff;
    border-radius: 12px;
    p:nth-child(1) {
        text-align: left;
        font-size: 14px;
        color: #c6c7ce;
        line-height: 43px;
    }
    p:nth-child(2) {
        text-align: left;
        font-size: 20px;
        font-weight: 600;
        color: #1f2124;
    }
}
.detail {
    width: 90%;
    height: 182px;
    padding: 0 15px;
    margin: 0 auto 15px auto;
    background: #ffffff;
    border-radius: 12px;
    div:nth-child(1) {
        p {
            text-align: left;
            font-size: 16px;
            color: #1f2124;
            font-weight: 600;
            line-height: 50px;
        }
    }
    div:nth-child(2) {
        margin-bottom: 15px;
        p {
            display: inline-block;
        }
        p:nth-child(1) {
            margin-right: 10px;
            font-size: 14px;
            color: #c6c7ce;
        }
        p:nth-child(2) {
            font-size: 14px;
            font-weight: 600;
        }
    }
    div:nth-child(3) {
        margin-bottom: 15px;
        p {
            display: inline-block;
        }
        p:nth-child(1) {
            margin-right: 10px;

            font-size: 14px;
            color: #c6c7ce;
        }
        p:nth-child(2) {
            font-size: 14px;
            font-weight: 600;
        }
    }
    div:nth-child(4) {
        width: 90%;
        height: 40px;
        position: absolute;
        left: 5%;
        bottom: 0px;
        border-top: 1px solid #ebecef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p:nth-child(1) {
            font-size: 14px;
            font-weight: 500;
            color: #1f2124;
        }
        p:nth-child(2) {
            font-size: 18px;
            font-weight: 600;
            color: #ff6363;
        }
    }
}
.content {
    width: 90%;
    height: 235px;
    padding: 0 15px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    div:nth-child(1) {
        width: 90%;
        margin-bottom: 15px;
        border-bottom: 1px solid #ebecef;
        p {
            text-align: left;
            font-size: 16px;
            color: #1f2124;
            font-weight: 600;
            line-height: 50px;
        }
    }
    div:nth-child(5) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        p:nth-child(1) {
            font-size: 14px;
            color: #c6c7ce;
        }
        p:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
        }
        p:nth-child(2) {
            font-size: 14px;
            font-weight: 600;
        }
        p:nth-child(3) {
            font-size: 14px;
            font-weight: 600;
            color: #3d7eff;
        }
    }
    .row {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p:nth-child(1) {
            margin-right: 10px;
            font-size: 14px;
            color: #c6c7ce;
        }
        p:nth-child(2) {
            font-size: 14px;
            font-weight: 600;
        }
    }
}
</style>
