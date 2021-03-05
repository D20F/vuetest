<template>
    <div class="popupbox">
    <div class="mask" @click="close"></div>
        <div class="popup">
            <p class="title">{{list.title}}</p>
            <input v-model="input_data" class="input" type="p" :placeholder="list.placeholder" />
            <div @click="confirm" class="btn">
                <p>{{list.btn}}</p>
            </div>
            <img @click="close"  class="close" src="https://img.sporeblockchain.cn/static/my/chacha.png" mode="" />
        </div>
    </div>
</template>
<script>
export default {
    name: "popup",
    props: {
        list: Object
    },
    data() {
        return {
            input_data: ""
        };
    },
    methods: {
        confirm() {
            this.$emit("confirm",this.input_data);
        },
        close(){
            this.$emit("close");
        }
    }
};
</script>
<style lang='scss'>

.popup {
    width: 85%;
    height: 450px;
    border-radius: 25px;
    margin: 500px auto 0 auto;
    background-color: #ffffff;
    text-align: center;
    padding-top: 10px;
    z-index: 10;
    .title {
        color: #242424;
        font-size:28px;
        margin: 30px auto 40px auto;
        font-weight: 600;
    }
    input{
        width: 80%;
        height: 90px;
        border-radius: 20px;
        margin: 0 auto 40px auto;
        border: 1px solid #CCCCCC;
    }
}
.btn {
    width: 80%;
    height: 90px;
    border-radius: 15px;
    margin: 0 auto;
    background-color: #3D7EFF;
    text-align: center;
    p {
        color: #ffffff;
        line-height: 90px;
        font-size:28px;
    }
}
.close{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
}
.popupbox{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
}
.mask{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 0;
}

</style>