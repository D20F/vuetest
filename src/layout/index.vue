<template>
    <v-app>
        <!-- <transition name="slide-left" mode="out-in"> -->
        <top-bar v-show="title" />
        <!-- </transition> -->
        <div
            class="main"
            id="main"
            :style="{
                paddingTop: title ? '50px': '0px',
                paddingBottom: bar ? '50px': '0px',
            }"
        >

            <!-- <transition name="slide-left" mode="out-in"> -->
            <router-view></router-view>
            <!-- </transition> -->
        </div>
        <bar />
    </v-app>
</template>
<script>
import bar from "./component/bar/index";
import topBar from "./component/top-bar/index";
export default {
    components: {
        topBar,
        bar,
    },
    data() {
        return {
            transitionName: "",
        };
    },
    mixins: [],
    computed: {
                    //   height: `calc(100% - ${main_padding}px)`

        // main_padding() {
        //     if (this.$route.meta.title && this.$route.meta.bar) {
        //         return 100;
        //     } else if (this.$route.meta.title || this.$route.meta.bar) {
        //         return 50;
        //     } else if (!this.$route.meta.title && !this.$route.meta.bar) {
        //         return 0;
        //     }
        // },
        title() {
            if (this.$route.meta.title) {
                return true;
            } else {
                return false;
            }
        },
        bar() {
            if (this.$route.meta.bar) {
                return true;
            } else {
                return false;
            }
        },
    },
    methods: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: opacity 0.5s;
}
.slide-left-enter,
.slide-left-leave-to {
    opacity: 0;
}
</style>
