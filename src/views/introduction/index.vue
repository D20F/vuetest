<template>
    <div class="dashboard">

    </div>
</template>

<script>
let point = [
    {
        id: "point-1",
        text: "说明",
        level: 1,
    },
];
export default {
    name: "",
    components: {},
    mixins: [],
    data: () => ({ value: 1 }),

    computed: {
        color() {
            switch (this.value) {
                case 0:
                    return "blue-grey";
                case 1:
                    return "teal";
                case 2:
                    return "brown";
                case 3:
                    return "indigo";
                default:
                    return "blue-grey";
            }
        },
    },
    created() {
                    this.$store.dispatch("system/add_notify", {
                type: "success",
                data: "复制成功",
                time: 2000,
            });
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>
