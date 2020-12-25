<template>
    <div class="container_box">
        <input type="text" v-model="filename" />
        <p @click="emit">emit</p>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {};
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    components: {},
    mixins: [],
    created() {
        
    },
    methods: {
        emit() {
            this.$emit("input", "ccccccc");
        },
    },
    computed: {
        filename: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            },
        },
    },
};
</script>

<style scoped lang="scss">
</style>
