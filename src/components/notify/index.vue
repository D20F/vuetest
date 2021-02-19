<template>
    <div class="box">
        <transition-group name="fade-transform">
            <v-alert
                v-for="(item, index) of list"
                :key="index"
                :type="item.type"
                dense
            >
                {{ item.data }}
            </v-alert>
        </transition-group>
    </div>
</template>




<script>
export default {
    name: "notify",
    props: {},
    data() {
        return {};
    },
    computed: {
        list() {
            return this.$store.state.system.notifyData;
        },
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.box {
    z-index: 100;
    position: fixed;
    top: 30px;
    left: 50%;
    transform: (0%, -50%);
}
</style>
