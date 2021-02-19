<template>
    <div class="topbar">
        <v-app-bar-nav-icon @click="drawer_fold_F"></v-app-bar-nav-icon>

        <v-toolbar-title>D</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-github </v-icon>
                </v-btn>
            </template>
            <span>github</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-avatar v-ripple size="36" v-bind="attrs" v-on="on">
                    <img class="cursor-hand" src="@/assets/layout/logo.png" />
                </v-avatar>
            </template>
            <span>D20F</span>
        </v-tooltip>
    </div>
</template>

<script>
export default {
    components: {},
    mixins: [],
    computed: {},
    methods: {
        drawer_fold_F() {
            this.$emit("drawer_fold_F");
        },
    },
};
</script>

<style lang="scss" scoped>
.topbar {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;
}
</style>