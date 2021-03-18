<template>
    <div v-show="bar" class="tabbar">
        <v-bottom-navigation height="50" v-model="value" grow color="primary">
            <v-btn
                @click="jump('/')"
                color="rgba(0, 0, 0, 0);"
                text
                height="100%"
            >
                <span>设备</span>

                <v-icon>mdi-dns</v-icon>
                <!-- <img src="@/static/img/tabbar/equipment.png" alt=""> -->
            </v-btn>
            <v-btn
                @click="jump('/income')"
                text
                color="rgba(0, 0, 0, 0);"
                height="100%"
            >
                <span>收益</span>

                <v-icon>mdi-wallet-outline</v-icon>
            </v-btn>

            <v-btn
                @click="jump('/my')"
                color="rgba(0, 0, 0, 0);"
                text
                height="100%"
            >
                <span>我的</span>

                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    components: {},
    mixins: [],
    data: () => ({ value: 1 }),
    computed: {},
    methods: {
        jump(path) {
            this.$router.replace({
                path: path,
            });
        },
    },
    computed: {
        bar() {
            if (this.$route.meta.bar == false) {
                return this.$route.meta.bar;
            }else if (this.$route.meta.bar == true) {
                return this.$route.meta.bar;
            } else {
                return true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.tabbar {
    width: 100%;
    height: 50px;
    position: relative;
}
</style>