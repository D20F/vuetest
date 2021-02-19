<template>
    <div class="catalogue" v-scroll="onScroll">
        <div class="title">
            <p>目录</p>
        </div>
        <!-- 页面锚点计算距离 -->

        <ul>
            <li
                v-for="({ id, text, level }, i) in list"
                :key="i"
                :class="{
                    'pl-3': level === 1,
                    'pl-6': level === 2,
                    'pl-9': level === 3,
                    pick: index === i,
                }"
            >
                <a
                    :href="'#' + id"
                    class="v-toc-link d-block transition-swing text-decoration-none"
                >
                    {{ text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            run: true,
            index: 0,
        };
    },
    mixins: [],
    computed: {
        list() {
            let data = [...this.$store.state.system.catalogueData];
            for (let item of data) {
                item.offsetTop = document.getElementById(item.id).offsetTop;
                // item.clientHeight = document.getElementById(item.id).clientHeight;
                item.id = item.id;
            }
            return this.$store.state.system.catalogueData;
        },
    },
    created() {

    },
    watch: {},
    methods: {
        onScroll(e) {
            if (!this.run) {
                return;
            }
            this.run = false;

            let currentOffset = document.documentElement.scrollTop || document.body.scrollTop;
            this.index = this.list.findIndex(({offsetTop,clientHeight}) => {
                return offsetTop >= currentOffset;
            });
            setTimeout(() => {
                this.run = true;
            }, 17);
        },
    },
};
</script>

<style lang="scss" scoped>
.catalogue {
    width: 100%;
    height: inherit;
    padding: 20px;
}
.title {
}
ul {
    list-style-type: none;
    li {
        border-left: 2px solid #e5e5e5;
    }
    a {
        color: rgba(0, 0, 0, 0.87) !important;
    }
    .pick {
        border-left: 2px solid #1867c0;
        color: #1867c0 !important;
    }
}
</style>
