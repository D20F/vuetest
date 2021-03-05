<template>
    <div class="card">
        <div class="titles">
            <p>{{ list.title }}</p>
            <p v-show="list.mode">运行中</p>
            <p v-show="!list.mode">关闭中</p>
        </div>
        <div class="time">
            <p>运行时间: </p>
            <p>{{ list.time }}</p>
        </div>
        <div class="mode">
            <div @click="cutover(false)" v-show="list.mode"></div>
            <div @click="cutover(true)" v-show="!list.mode"></div>
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
        cutover(mode){
            if(mode){
                console.log(2)
            }else{
                console.log(1)
                
            }
        }
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
    position: relative;
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
        padding: 3px 8px;
        color: #ffffff;
    }
    p:nth-child(3) {
        background: #ebecef;
        border-radius: 12px;
        font-size: 6px;
        padding: 3px 8px;
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
    width: 50px;
    height: 25px;
    background: #f5f6fb;
    position: absolute;
    right: 15px;
    bottom: 20px;
    border-radius: 15px;
    div:nth-child(1) {
        width: 20px;
        height: 20px;
        margin: 2.5px;
        background: #3d7eff;
        display: inline-block;
        border-radius: 50%;
    }
    div:nth-child(2) {
        width: 20px;
        height: 20px;
        margin: 2.5px;
        background: #ffffff;
        display: inline-block;
        border-radius: 50%;
    }
}
</style>
