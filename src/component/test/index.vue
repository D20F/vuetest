<template>
    <div>
        <div>
            {{ def }}
        </div>
        <div v-for="(item, index) in list" :key="index">
            {{ JSON.stringify(item) }}
        </div>
        <v-text-field label="device_id" v-model="device_id"></v-text-field>
        <v-text-field
            label="service_uuid"
            v-model="service_uuid"
        ></v-text-field>
        <v-text-field
            label="characteristic_uuid"
            v-model="characteristic_uuid"
        ></v-text-field>
        <v-text-field label="pin" v-model="pin"></v-text-field>
        <div class="btnss" @click="scan">
            <p>scan 扫描</p>
        </div>
        <div class="btnss" @click="startScan">
            <p>startScan 开始扫描</p>
        </div>
        <div class="btnss" @click="startScanWithOptions">
            <p>startScanWithOptions 扫描并发现BLE外设</p>
        </div>
        <div class="btnss" @click="stopScan">
            <p>stopScan 停止扫描</p>
        </div>
        <div class="btnss" @click="setPin">
            <p>setPin 设置pin</p>
        </div>
        <div class="btnss" @click="connect">
            <p>connect 连接</p>
        </div>
        <div class="btnss" @click="autoConnect">
            <p>autoConnect 自动连接</p>
        </div>
        <div class="btnss" @click="disconnect">
            <p>disconnect 断开连接</p>
        </div>
        <div class="btnss" @click="read">
            <p>read 读取</p>
        </div>
        <div class="btnss" @click="write">
            <p>write 写入</p>
        </div>
        <div class="btnss" @click="startNotification">
            <p>startNotification 特征值更改得到通知</p>
        </div>
        <div class="btnss" @click="stopNotification">
            <p>stopNotification 停止特征值</p>
        </div>
        <div class="btnss" @click="isEnabled">
            <p>isEnabled 报告蓝牙</p>
        </div>
        <div class="btnss" @click="isLocationEnabled">
            <p>isLocationEnabled 报告位置服务</p>
        </div>
        <div class="btnss" @click="isConnected">
            <p>isConnected 报告连接状态。</p>
        </div>
        <div class="btnss" @click="showBluetoothSettings">
            <p>showBluetoothSettings 打开蓝牙设置</p>
        </div>
        <div class="btnss" @click="enable">
            <p>enable 提醒打开蓝牙</p>
        </div>
        <div class="btnss" @click="bondedDevices">
            <p>bondedDevices 查找绑定的设备</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            device_id: "", //外围设备的UUID或MAC地址
            service_uuid: "", //
            characteristic_uuid: "", //
            list: [], //
            def: "", //
            pin: "", //
        };
    },
    methods: {
        // 扫描
        scan() {
            ble.scan(
                [],
                5,
                (device) => {
                    alert(JSON.stringify(device));
                    this.list = device;
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify(failure));
                }
            );
        },
        // 开始扫描
        startScan() {
            ble.startScan(
                [],
                (device) => {
                    alert(JSON.stringify(device));
                    this.list = device;
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify(failure));
                }
            );
        },
        // 扫描并发现BLE外设
        startScanWithOptions() {
            ble.startScanWithOptions(
                [],
                { reportDuplicates: false },
                (device) => {
                    // JDY-23A-BLE
                    // JDY-23A-SPP
                    if (device.name.substr(0, 7) == "JDY-23A") {
                        this.list.push(device);
                        this.device_id = this.list[0].id;
                        this.stopScan();
                    }
                },
                (failure) => {
                    this.$toast({ content: "扫描失败" });
                }
            );
        },
        // 停止扫描
        stopScan() {
            ble.stopScan(
                (device) => {
                    console.log("停止扫描成功");
                },
                (failure) => {
                    this.$toast({ content: "停止扫描失败" });
                }
            );
        },
        // 连接
        connect() {
            ble.connect(
                this.device_id,
                (device) => {
                    this.$toast({ content: "连接成功" });
                },
                (failure) => {
                    this.$toast({ content: "连接失败" });
                }
            );
        },
        setPin() {
            ble.setPin(
                this.pin,
                (device) => {
                    this.$toast({ content: "设置pin成功" });
                },
                (failure) => {
                    this.$toast({ content: "设置pin失败" });
                }
            );
        },
        // 自动连接
        autoConnect() {
            ble.autoConnect(
                this.device_id,
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // 断开连接
        disconnect() {
            ble.disconnect(
                this.device_id,
                (device) => {
                    this.$toast({ content: "断开连接成功" });

                },
                (failure) => {
                    this.$toast({ content: "断开连接失败" });
                }
            );
        },
        // 读取 ArrayBuffer
        read() {
            ble.read(
                this.device_id,
                this.service_uuid,
                this.characteristic_uuid,
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // 写 ArrayBuffer
        write() {
            // send a 3 byte value with RGB color
            var data = new Uint8Array(3);
            data[0] = 0xff; // red
            data[1] = 0x00; // green
            data[2] = 0xff; // blue
            ble.write(
                this.device_id,
                this.service_uuid,
                this.characteristic_uuid,
                data.buffer,
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // 注册以在特征值更改时得到通知。
        startNotification() {
            ble.startNotification(
                this.device_id,
                this.service_uuid,
                this.characteristic_uuid,
                (buffer) => {
                    let result = this.ab2hex(buffer);
                    let str = this.hexCharCodeToStr(result);
                    let type = "";
                    let state = Number("0x" + result.substring(4, 6)).toString(
                        2
                    );
                    if (state.length == 7) {
                        state = "0" + state;
                    }
                    if (state.substring(6, 7) == "1") {
                        type = "稳定";
                    } else {
                        type = "不稳定";
                    }

                    if (state.substring(4, 5) == "1") {
                        type += " 称量溢出";
                    }

                    if (state.substring(7, 8) == "1") {
                        type += " 零点";
                    }
                    console.log(
                        `重量：${Number(
                            str.substring(3, 10)
                        )}kg (${type}), 电量：${str.substring(12, 14)}%`
                    );
   
                    alert(
                        `重量：${Number(
                            str.substring(3, 10)
                        )}kg (${type}), 电量：${str.substring(12, 14)}%`
                    )
                },
                (failure) => {
                    alert("失败", failure);
                }
            );
        },
        // 停止特征值广播
        stopNotification() {
            ble.stopNotification(
                this.device_id,
                this.service_uuid,
                this.characteristic_uuid,
                (buffer) => {
                    alert("停止成功", buffer);
                },
                (failure) => {
                    alert("失败", failure);
                }
            );
        },
        //报告连接状态。
        isConnected() {
            ble.isConnected(
                this.device_id,
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        //报告是否启用了蓝牙
        isEnabled() {
            ble.isEnabled(
                (device) => {
                    console.log('蓝牙已启动')
                },
                (failure) => {
                    this.enable();
                }
            );
        },
        //报告是否启用了位置服务
        isLocationEnabled() {
            ble.isLocationEnabled(
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // 打开操作系统的蓝牙设置
        showBluetoothSettings() {
            ble.showBluetoothSettings(
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // 提醒用户启动蓝牙
        enable() {
            ble.enable(
                (device) => {
                    console.log('启动蓝牙成功')
                },
                (failure) => {
                    this.$toast({ content: "请启动蓝牙功能" });
                }
            );
        },
        // 查找绑定的设备
        bondedDevices() {
            ble.bondedDevices(
                (device) => {
                    alert(JSON.stringify("成功", device));
                    this.def = JSON.stringify(device);
                },
                (failure) => {
                    alert(JSON.stringify("失败", failure));
                }
            );
        },
        // string 转换 buff
        stringToBytes(string) {
            var array = new Uint8Array(string.length);
            for (var i = 0, l = string.length; i < l; i++) {
                array[i] = string.charCodeAt(i);
            }
            return array.buffer;
        },
        // buff 转换 string
        bytesToString(buffer) {
            return String.fromCharCode.apply(null, new Uint8Array(buffer));
        },
        hexCharCodeToStr(hexCharCodeStr) {
            var trimedStr = hexCharCodeStr.trim();
            var rawStr =
                trimedStr.substr(0, 2).toLowerCase() === "0x"
                    ? trimedStr.substr(2)
                    : trimedStr;
            var len = rawStr.length;
            if (len % 2 !== 0) {
                alert("存在非法字符!");
                return "";
            }
            var curCharCode;
            var resultStr = [];
            for (var i = 0; i < len; i = i + 2) {
                curCharCode = parseInt(rawStr.substr(i, 2), 16);
                resultStr.push(String.fromCharCode(curCharCode));
            }
            return resultStr.join("");
        },
        ab2hex(buffer) {
            const hexArr = Array.prototype.map.call(
                new Uint8Array(buffer),
                function (bit) {
                    return ("00" + bit.toString(16)).slice(-2);
                }
            );
            return hexArr.join("");
        },
    },

    created() {},
};
</script>

<style lang="scss" scoped>
.btnss {
    width: 90%;
    height: 45px;
    border-radius: 8px;
    margin: 5px auto;
    text-align: center;
    background: #00b075;
    p {
        color: #ffffff;
        line-height: 45px;
        font-size: 16px;
    }
}
</style>
