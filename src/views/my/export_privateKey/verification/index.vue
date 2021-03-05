<template>
    <div class="popupbox">
        <div class="mask" @click="close"></div>
        <div class="popup">
            <div>
                <p>
                    {{ list.title }}
                </p>
            </div>
            <div>
                <input
                    v-model="input_data"
                    class="input"
                    type="p"
                    :placeholder="list.placeholder"
                />
            </div>
            <div @click="close">
                <p>取消</p>
            </div>
            <div @click="confirm">
                <p>确认</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "popup",
    props: {
        list: {
            type: Object,
        },
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
    height: 206px;
    border-radius: 12px;
    margin: 250px auto 0 auto;
    background-color: #ffffff;
    text-align: center;
    z-index: 10;
    div:nth-child(1) {
        p {
            line-height: 65px;
            color: #242424;
            font-size: 18px;
            font-weight: 600;
        }
    }
    div:nth-child(2) {
        width: 90%;
        height: 45px;
        background: #f5f6fb;
        margin: 0 auto 30px auto;
        border-radius: 10px;
        input {
            width: 100%;
            height: 100%;
        }
    }
    div:nth-child(3) {
        font-size: 16px;
        display: inline-block;
        width: 50%;
        height: 60px;
        line-height: 60px;
        border-right: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
    }
    div:nth-child(4) {
        display: inline-block;
        width: 50%;
        height: 60px;
        line-height: 60px;
        border-right: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        p {
            color: #00b075;
        }
        font-size: 16px;
    }
}
input {
    font-size: 15px;
    padding: 0 10px;
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