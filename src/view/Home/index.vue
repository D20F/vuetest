<template>
    <div class="container_box">
        

        <Login v-model="s" />
        <p>{{s}}</p>


    </div>
</template>

<script>
import Login from '../login/index'
export default {
    name: "Home",
    data() {
        return {
            s:''
        };
    },
    components: {
        Login
    },
    mixins: [],
    created() {},
    methods: {},
    computed: {},
};
</script>

<style scoped lang="scss">
</style>
