
var public_component = {
    data() {
        return {

        }
    },
    onLoad() {

    },
    methods: {
        jumpRouter(path, data) {
            this.$router.push({
                path: path,
                query: data
            })
        },

    },



}
export default public_component;



