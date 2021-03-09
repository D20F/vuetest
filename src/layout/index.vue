<template>
    <v-app>
        <bar />

        <div class="main" :style="{height:`calc(100% - ${main_padding}px)`}">
            <router-view></router-view>
        </div>

        <footers />

        <!-- 提示 -->
        <!-- <notify /> -->
    </v-app>
</template>
<script>
import footers from "./component/footer/index";
import bar from "./component/bar/index";
export default {
    components: {
        footers,
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
