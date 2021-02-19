<template>
    <v-app>
        <!-- <v-app-bar
            app
            clipped-left
            clipped-right
            flat
            color="#FFFFFF"
            style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
        >
            <bar @drawer_fold_F="drawer_fold_F" />
        </v-app-bar>

        <v-navigation-drawer app clipped v-model="drawer_fold" floating>
            <drawer />
        </v-navigation-drawer>

        <v-navigation-drawer right app clipped floating>
            <catalogue />
        </v-navigation-drawer>

        <v-main>
            <v-container style="margin-top: 10px;" fluid>
                <v-responsive
                    :aspect-ratio="16 / 9"
                    :max-width="868"
                    class="v-responsive mx-auto overflow-visible"
                >
                    <container /> -->

                    <router-view></router-view>
                    
                <!-- </v-responsive>
            </v-container>
        </v-main>

        <v-footer app>
            <footers />
        </v-footer> -->

        <!-- 提示 -->
        <notify />
    </v-app>
</template>
<script>
import bar from "./component/bar";
import drawer from "./component/drawer/index.vue";
import catalogue from "./component/catalogue/index.vue";
import container from "./component/container";
import footers from "./component/footer";

export default {
    components: {
        bar,
        drawer,
        container,
        footers,
        catalogue,
    },
    data() {
        return {
            drawer_fold: true,
        };
    },
    mixins: [],
    computed: {},
    methods: {
        drawer_fold_F() {
            this.drawer_fold
                ? (this.drawer_fold = false)
                : (this.drawer_fold = true);
        },
    },
};
</script>

<style lang="scss" >
.v-application p {
    margin: 0;
    padding: 0;
}
</style>
