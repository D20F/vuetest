<template>
    <div class="dashboard">
        <v-bottom-navigation
            v-model="value"
            :background-color="color"
            dark
            shift
        >
            <v-btn>
                <span>Video</span>

                <v-icon>mdi-television-play</v-icon>
            </v-btn>

            <v-btn>
                <span>Music</span>

                <v-icon>mdi-music-note</v-icon>
            </v-btn>

            <v-btn>
                <span>Book</span>

                <v-icon>mdi-book</v-icon>
            </v-btn>

            <v-btn>
                <span>Image</span>

                <v-icon>mdi-image</v-icon>
            </v-btn>
        </v-bottom-navigation>
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
        this.$store.dispatch("system/tog_catalogue", this.point);
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>
