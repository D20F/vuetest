<template>
    <div v-show="title" class="title-column">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <p>{{ title }}</p>

        <div class="space"></div>
        <!-- <v-btn depressed disabled outlined>
            <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn> -->
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
        title() {
            // 写完标题栏
            // console.log(this.$route);
            // console.log(this.$route.meta.title);
            if (this.$route.meta.title) {
                return this.$route.meta.title;
            } else {
                return false;
            }
        },
    },
    created() {},
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang="scss" scoped>
.title-column {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .space{
        width: 24px;
        height: 24px;
    }
}

</style>
