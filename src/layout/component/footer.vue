<template>
    <div>
        <v-bottom-navigation
            height="50"
            v-model="value"
            :background-color="color"
            dark
            grow
        >
            <v-btn color="rgba(0, 0, 0, 0);" text height="100%">
                <span>Music</span>

                <v-icon>mdi-music-note</v-icon>
            </v-btn>
            <v-btn text color="rgba(0, 0, 0, 0);" height="100%">
                <span>Video</span>

                <v-icon>mdi-television-play</v-icon>
            </v-btn>

            <v-btn color="rgba(0, 0, 0, 0);" text height="100%">
                <span>Book</span>

                <v-icon>mdi-book</v-icon>
            </v-btn>

            <v-btn color="rgba(0, 0, 0, 0);" text height="100%">
                <span>Image</span>

                <v-icon>mdi-image</v-icon>
            </v-btn>
            <v-btn color="rgba(0, 0, 0, 0);" text height="100%">
                <span>Image</span>

                <v-icon>mdi-emoticon-kiss-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    components: {},
    mixins: [],
    data: () => ({ value: 0 }),
    computed: {
        color() {
            switch (this.value) {
                case 0:
                    return "red darken-4";
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
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>