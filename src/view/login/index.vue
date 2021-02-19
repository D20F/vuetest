<template>
    <div class="container_box">
        <input type="text" v-model="filename" />
        <p @click="emit">emit</p>
    </div>
</template>

<script>
// const MDNS = require("libp2p-mdns");
// const multicastDNS = require("multicast-dns");

export default {
    name: "Login",
    data() {
        return {};
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    components: {},
    mixins: [],
    created() {
        this.test_multicastDNS();
    },
    methods: {
        test() {
            // console.log(1111);
            // let options = {
            //     serviceTag: "_spore._http._tcp",
            //     peerId: "sadsa",
            // };
            // const mdns = new MDNS(options);

            // mdns.on("peer", (peerData) => {
            //     console.log(
            //         "Found a peer in the local network",
            //         peerData.id.toB58String(),
            //         peerData.multiaddrs
            //     );
            // });
            // // Broadcast for 20 seconds
            // mdns.start();
            // setTimeout(() => mdns.stop(), 20 * 1000);
        },
        test_multicastDNS() {
            // let options = {
            //     multicast: true, // use udp multicasting
            //     interface: "192.168.0.2", // explicitly specify a network interface. defaults to all
            //     port: 5353, // set the udp port
            //     ip: "224.0.0.251", // set the udp ip
            //     ttl: 255, // set the multicast ttl
            //     loopback: true, // receive your own packets
            //     reuseAddr: true, // set the reuseAddr option when creating the socket (requires node >=0.11.13)
            // };
            // let mdns = multicastDNS([options]);
            // mdns.on("response", function (response) {
            //     console.log("got a response packet:", response);
            // });

            // mdns.on("query", function (query) {
            //     console.log("got a query packet:", query);
            // });
            // mdns.query({
            //     questions: [
            //         {
            //             name: "brunhilde.local",
            //             type: "A",
            //         },
            //     ],
            // });
            // console.log(mdns);
        },
        emit() {
            this.$emit("input", "ccccccc");
        },
    },
    computed: {
        filename: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            },
        },
    },
};
</script>

<style scoped lang="scss">
</style>
