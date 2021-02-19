<template>
    <v-card class="mx-auto" width="300">
        <v-list dense>
            <v-list-group
                v-for="(item, i) in sider_list"
                :key="i"
                color="primary"
                no-action
                :prepend-icon="item.icon"
            >
                <template v-slot:activator>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </template>

                <sider-item
                    v-for="(items, ii) in item.child"
                    :key="ii"
                    :list="items"
                />
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
import siderItem from "./component/list";
import sider_list from "./index";
export default {
    components: {
        siderItem: siderItem,
    },
    mixins: [],
    data() {
        return {
            sider_list: sider_list,
        };
    },
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.mx-auto {
    height: 100%;
}
</style>