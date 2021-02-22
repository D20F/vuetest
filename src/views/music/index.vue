<template>
    <div class="box">
        <div id="container"></div>

        <p>{{ map }}</p>
        <p>{{ maps }}</p>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            swipeDirection: "None",
            map: "",
            maps: "",
        };
    },
    computed: {},
    created() {
       

        // document.addEventListener("touchstart", touch, false);
        // document.addEventListener("touchmove", touch, false);
        // document.addEventListener("touchend", touch, false);

        // let x,y,state;
        // console.log(document.body.clientWidth)

        console.log('写成指令')

        // function touch(event) {
        //     var event = event || window.event;
        //     var oInp = document.getElementById("inp");
        //     switch (event.type) {
        //         case "touchstart":
        //             console.log("touchstart",event.touches[0].clientX +"," +event.touches[0].clientY );
        //             x = event.touches[0].clientX;
        //             y = event.touches[0].clientY;
        //             break;
        //         case "touchend":
        //             // console.log("touchend",event.changedTouches[0].clientX +"," +event.changedTouches[0].clientY);

        //             break;
        //         case "touchmove":
        //             console.log("touchmove",event.touches[0].clientX +"," +event.touches[0].clientY);
        //             if(event.changedTouches[0].clientX - x >= 0){
        //                 console.log('右')
        //             }else if(event.changedTouches[0].clientX - x <= 0){
        //                 console.log('左')
        //             }else{
        //                 console.log('不动')
        //             }
        //             break;
        //     }
        // }
    },
    methods: {
        swipe() {},
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
}
p {
    color: black;
}
#container {
    width: 100%;
    height: 50%;
}
</style>
