<template>
    <v-list-group v-if="list.child" no-action sub-group >
        <template v-slot:activator>
            <v-list-item-content>
                <v-list-item-title>{{ list.text }}</v-list-item-title>
            </v-list-item-content>
        </template>
        <sider-item v-for="(item, i) in list.child" :key="i" :list="item" />
    </v-list-group>

    <v-list-item   link v-else :to="list.to">
        <v-list-item-content>
            <v-list-item-title v-text="list.text"></v-list-item-title>
        </v-list-item-content>
        <!-- <v-list-item-icon>
            <v-icon v-text="list.icon"></v-icon>
        </v-list-item-icon> -->
    </v-list-item>
</template>

<script>
export default {
    name: "siderItem",
    props: {
        list: {
            type: Object,
        },
    },
    components: {},
    mixins: [],
    data() {
        return {
        };
    },
    created() {},
    computed: {},
    methods: {
    },
};
</script>

<style lang="scss" scoped>
</style>