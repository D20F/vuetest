

var mixin = {
    data() {
        return {
            countdown: 300,
            countdown_timeouter: "",
        };
    },
    created() {
        // this.countdown_start();
    },
    methods: {
        countdown_start() {
            this.countdown_timeouter = setInterval(() => {
                this.countdown = this.countdown - 1;
                // console.log(this.countdown)
                if (this.countdown == 0) {
                    this.countdown_init();
                    uni.$emit("countdown_end")
                }
            }, 1000);

        },
        countdown_init() {
            clearInterval(this.countdown_timeouter);
            this.countdown_timeouter = null;
        },
    },
    computed: {},
    beforeDestroy() {
        this.countdown_init();
    },
    onHide() {
        this.countdown_init();
    },
}
export default mixin;



