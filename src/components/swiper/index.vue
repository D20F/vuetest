<template>
    <div
        v-gesture="{
            horizontal: (v) => horizontal(v),
            start: (v) => start(v),
            end: (v) => end(v),
        }"
        id="container"
    >
        <div class="left_mask" :style="{ width: left_mask_width + 'px' }"></div>
        <div
            class="main"
            :style="{ transform: `translateX(${'-' + degree + '%'})` }"
        >
            <slot></slot>
        </div>
        <div
            class="right_mask"
            :style="{ width: right_mask_width + 'px' }"
        ></div>
    </div>
</template>
<script>
export default {
    name: "drawer",
    data() {
        return {
            degree: 0,
            real_index: 1,
            left_mask_width: 0,
            right_mask_width: 0,
        };
    },
    props: {
        index: {
            //索引
            type: Number,
            default: 1,
        },
    },
    methods: {
        horizontal(val) {
            if (val.direction == "right") {
                this.degree > (this.real_index - 1) * 100
                    ? (this.degree = this.degree - val.distance)
                    : (this.degree = (this.real_index - 1) * 100);
            } else {
                if (this.degree < this.real_index * 100) {
                    if (this.slot_length == this.real_index) {
                        this.degree = (this.slot_length - 1) * 100;
                    } else {
                        this.degree = this.degree + val.distance;
                    }
                }
            }
        },
        start(val) {},
        end(val) {
            if (this.degree < (this.real_index - 1) * 100 + 50) {
                let s = setInterval(() => {
                    this.degree = this.degree - 1;
                    if (this.degree <= 0) {
                        this.degree = 0;
                        this.real_index = 1;
                        clearInterval(s);
                    } else if (this.degree <= (this.real_index - 1) * 100) {
                        this.degree = (this.real_index - 1) * 100;
                        this.real_index -= 1;
                        clearInterval(s);
                    }
                }, 2);
            } else {
                let s = setInterval(() => {
                    this.degree = this.degree + 1;
                    if (this.degree >= (this.slot_length - 1) * 100) {
                        this.degree = (this.slot_length - 1) * 100;
                        this.real_index = this.slot_length;
                        clearInterval(s);
                    } else if (this.degree >= this.real_index * 100) {
                        this.degree = this.real_index * 100;
                        this.real_index += 1;
                        clearInterval(s);
                    }
                }, 2);
            }
        },
    },
    watch: {
        index: {

            //完善索引 完善侧边阴影
            handler(newVal) {
                if (newVal) {
                    this.real_index = newVal;
                }
            },
        },
    },
    computed: {
        slot_length() {
            return this.$slots.default.length;
        },
    },
    created() {},
};
</script>

<style lang="scss" scoped>
#container {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
}
.main {
    width: 100%;
    height: 100%;
}
.left_mask {
    height: 100%;
    border-top-right-radius: 100% 50%;
    border-bottom-right-radius: 100% 50%;
    z-real_index: 100;
    background: #eeeeee;
    opacity: 0.3;
    position: absolute;
    left: 0;
}
.right_mask {
    height: 100%;
    border-top-left-radius: 100% 50%;
    border-bottom-left-radius: 100% 50%;
    z-real_index: 100;
    background: #eeeeee;
    opacity: 0.3;
    position: absolute;
    right: 0;
}
</style>
