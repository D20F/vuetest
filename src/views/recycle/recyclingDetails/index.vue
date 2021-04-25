<template>
      <div class="box">
            <div class="tabbox">
                <div class="tabcontent">
                    <div>
                        <p class="title">复检完成</p>
                    </div>
                    <div>
                        <img src="@/static/img/recycle/check/success.png" />
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="content_title">
                    <img src="@/static/img/recycle/green.png" />
                    <p>当前已复检</p>
                </div>
                <div class="exist">
                    <div class="row" v-for="(item, index) of list" :key="index">
                        <div>
                            <p>{{ index + 1 }}. 垃圾桶归属:</p>
                            <p>{{ item.name }}</p>
                        </div>
                        <div>
                            <p>桶重量:</p>
                            <p>{{ item.weight }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn_green">
                <p>返回首页</p>
            </div>
    </div>
</template>

<script>
import publics from "@/mixins/public.js";

export default {
    data() {
        return {
            list: [
                {
                    name: "丽影广场",
                    weight: 221,
                },
                {
                    name: "丽影广场",
                    weight: 221,
                },
                {
                    name: "丽影广场",
                    weight: 221,
                },
                {
                    name: "龙岩",
                    weight: 221,
                },
            ],
        };
    },
    components: {
        
    },
    mixins: [publics],
    methods: {},
    watch: {},
    created() {},
};
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: inherit;
    overflow-y: auto;
    position: relative;
    background-color: #fafafa;
}
.tabbox {
    width: 90%;
    height: 90px;
    background: #ffffff;
    margin: 15px auto;
    border-radius: 10px;
    .tabcontent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding-top: 12px;
        p {
            text-align: left;
            line-height: 30px;
        }
        .title {
            color: #00b075;
            font-size: 25px;
            font-weight: 600;
        }
        div:nth-child(2) {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: rgba(248, 250, 249, 1);
            img {
                position: absolute;
                top: 16px;
                left: 16px;
                width: 24px;
                height: 24px;
            }
        }
    }
}
.content {
    width: 90%;
    background: #ffffff;
    margin: 15px auto 100px auto;
    border-radius: 10px;
}

.content_title {
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-content: center;
    justify-content: left;
    img {
        width: 17px;
        height: 17px;
        margin-top: 21px;
        margin-right: 10px;
    }
    p {
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        line-height: 60px;
    }
}
.exist {
    width: 100%;
    min-height: 200px;
    padding-bottom: 20px;
    .row {
        display: flex;
        width: 90%;
        margin: 0 auto 5px auto;
        height: 40px;
        border-bottom: 1px solid #eceff1;
        justify-content: space-between;
        align-items: center;
        div {
            display: flex;
            align-items: center;
            justify-content: left;
            p:nth-child(1) {
                font-weight: 600;
                margin-right: 5px;
            }

            p {
                color: #242424;
                font-size: 15px;
            }
        }
    }
}

.btn_green {
    width: 80%;
    height: 48px;
    border-radius: 12px;
    background: #00b075;
    padding: 0;
    margin: 0 auto;
    position: fixed;
    bottom: 2%;
    left: 10%;
    p {
        text-align: center;
        color: #ffffff;
        line-height: 48px;
        font-size: 14px;
    }
}
</style>
