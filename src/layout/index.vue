<template>
    <v-app>
        <div class="main">
            <router-view></router-view>
        </div>

        <div class="tabbar">
            <footers />
        </div>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            width="300"
            style="box-shadow: none"
        >
            <drawer />
        </v-navigation-drawer>

        <!-- 提示 -->
        <notify />
    </v-app>
</template>
<script>
import footers from "./component/footer";
import drawer from "./component/drawer";
export default {
    components: {
        footers,
        drawer,
    },
    data() {
        return {
            drawer: false,
        };
    },
    mixins: [],
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: calc(100% - 50px);
}
.tabbar {
    width: 100%;
    height: 50px;
    position: relative;
}
</style>
