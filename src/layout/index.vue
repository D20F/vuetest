<template>
    <v-app>
        <top-bar />

        <div class="main" id="main" :style="{ height: `calc(100% - ${main_padding}px)` }">
            <router-view></router-view>
        </div>

        <bar />
        <!-- 提示 -->
        <!-- <notify /> -->
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
        return {};
    },
    mixins: [],
    computed: {
        main_padding() {
            if (this.$route.meta.title) {
                return 100;
            } else {
                return 50;
            }
        },
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
}
</style>
