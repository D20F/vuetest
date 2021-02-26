<template>
    <div class="box">

        <swiper class="s" :index="index" @change="change">
            <swiper-item>
                <div class="one" @click="c">
                    <p>{{ swipeDirection }}</p>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="two" @click="c">
                    <p>{{ swipeDirection }}</p>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="three" @click="c">
                    <p>{{ swipeDirection }}</p>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="four" @click="c">
                    <p>{{ swipeDirection }}</p>
                </div>
            </swiper-item>
        </swiper>

    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            swipeDirection: "None",
            show: false,
            index: 3,
        };
    },
    computed: {},
    created() {},
    methods: {
        c() {},
        change(index) {
            console.log(index)
        },
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
p {
    color: black;
}
.s {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.one {
    width: 100%;
    height: 100%;
    background: seagreen;
}
.two {
    width: 100%;
    height: 100%;
    background: RGB(223, 73, 72);
}
.three {
    width: 100%;
    height: 100%;
    background: aqua;
}
.four {
    width: 100%;
    height: 100%;
    background: violet;
}

</style>
