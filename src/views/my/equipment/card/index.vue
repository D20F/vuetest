<template>
    <div class="card">
        <div class="titles">
            <p>{{ list.title }}</p>
            <p v-show="list.mode">运行中</p>
            <p v-show="!list.mode">关闭中</p>
        </div>
        <div class="time">
            <p>运行时间:</p>
            <p>{{ list.time }}</p>
        </div>
        <div class="mode" @click="select_show = true">
            <p>解除绑定</p>
        </div>
        <div v-if="select_show" class="mask"></div>
        <div v-if="select_show" class="select">
            <p @click="unbind">解除绑定</p>
            <p @click="select_show = false">取消</p>
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
        return {
            select_show: false,
        };
    },
    onLoad() {},
    methods: {
        unbind() {},
    },
};
</script>

<style scoped lang="scss">
.card {
    width: 90%;
    margin: 0 auto 10px auto;
    height: 92px;
    background: #ffffff;
    border-radius: 12px;
    padding: 15px;
}
.titles {
    margin-bottom: 5px;
    p {
        display: inline-block;
    }
    p:nth-child(1) {
        margin-right: 10px;
        font-size: 18px;
        font-weight: 600;
        color: #1f2124;
    }
    p:nth-child(2) {
        background: #3d7eff;
        border-radius: 12px;
        font-size: 6px;
        padding: 5px 15px;
        color: #ffffff;
    }
    p:nth-child(3) {
        background: #ebecef;
        border-radius: 12px;
        font-size: 6px;
        padding: 3px 7px;
        color: #ffffff;
    }
}
.time {
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
        color: #1f2124;
    }
}
.mode {
    width: 82px;
    height: 32px;
    background: #ebf2ff;
    position: absolute;
    right: 15px;
    bottom: 20px;
    border-radius: 15px;
    text-align: center;

    p {
        font-size: 14px;
        line-height: 32px;
        color: #3d7eff;
    }
}
.mask {
    z-index: 100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
}
.select {
    width: 100%;
    height: 175px;
    background: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    border-radius: 15px 15px 0 0;
    z-index: 101;
    text-align: center;
    p:nth-child(1) {
        font-size: 18px;
        line-height: 87px;
        color: #ef5f44;
    }
    p:nth-child(2) {
        font-size: 18px;
        line-height: 87px;
        color: #1f2124;
    }
}
</style>
