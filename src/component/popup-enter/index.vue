<template>
    <div class="popupbox">
        <div class="mask" @click="close"></div>
        <div class="popup">
            <p class="popup_title">{{ list.title }}</p>
            <input
                v-model="input_data"
                class="input"
                type="p"
                :placeholder="list.placeholder"
            />
            <div @click="confirm" class="btn">
                <p>{{ list.btn }}</p>
            </div>
            <img
                @click="close"
                class="close"
                src="https://img.sporeblockchain.cn/static/my/chacha.png"
                mode=""
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "popup",
    props: {
        list: Object,
    },
    data() {
        return {
            input_data: "",
        };
    },
    methods: {
        confirm() {
            this.$emit("confirm", this.input_data);
        },
        close() {
            this.$emit("close");
        },
    },
};
</script>
<style lang='scss'>
.popup {
    width: 85%;
    height: 225px;
    border-radius: 25px;
    margin: 250px auto 0 auto;
    background-color: #ffffff;
    text-align: center;
    padding-top: 5px;
    z-index: 10;
    .popup_title {
        color: #242424;
        font-size: 14px;
        line-height: 60px;
        font-weight: 600;
    }
    input {
        width: 80%;
        height: 45px;
        border-radius: 10px;
        margin: 0 auto 20px auto;
        border: 1px solid #cccccc;
    }
}
.btn {
    width: 80%;
    height: 45px;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #3d7eff;
    text-align: center;
    p {
        color: #ffffff;
        line-height: 45px;
        font-size: 14px;
    }
}
.close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.popupbox {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
}
.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 0;
}
</style>