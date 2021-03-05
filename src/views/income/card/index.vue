<template>
    <div class="card" @click="popup">
        <div class="title">
            <p>{{ list.title }}</p>
            <p v-show="list.mode">已完成</p>
            <p v-show="!list.mode">进行中</p>
        </div>
        <div class="content">
            <p>挑战成功次数:</p>
            <p class="font_black_1">{{ list.time }}</p>
        </div>
        <div class="content">
            <p>挑战收益:</p>
            <p class="font_red_2">￥{{ list.time }}</p>
        </div>
        <div class="time">
            <p>开始时间：{{ list.time }}</p>
            <img src="@/static/img/income/detail.png" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    created() {},
    methods: {
        popup() {
            this.$emit("popup", this.list);
        },

    },
};
</script>

<style scoped lang="scss">
.card {
    width: 90%;
    margin: 0 auto 10px auto;
    height: 161px;
    background: #ffffff;
    border-radius: 12px;
    padding: 15px;
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
        color: #1f2124;
    }
    p:nth-child(2) {
        font-size: 16px;
        color: #c6c7ce;
        font-weight: 600;
    }
    p:nth-child(3) {
        font-size: 16px;
        color: #3d7eff;
        font-weight: 600;
    }
}
.content {
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
.time {
    width: 90%;
    height: 40px;
    position: absolute;
    left: 5%;
    bottom: 0px;
    border-top: 1px solid #ebecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 12px;
        font-weight: 600;
        color: #1f2124;
    }
    img {
        width: 35px;
        height: 20px;
    }
}
</style>
