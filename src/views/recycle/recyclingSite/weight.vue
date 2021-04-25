<template>
    <div class="box">
        <div class="title">
            <p>称重重量 (kg) :</p>
        </div>
        <div class="weight">
            <p>{{ weight }}</p>
        </div>
        <div v-show="step == 1">
            <!-- <div class="btn_bule" @click="rest">
                <p>重置</p>
            </div> -->
            <div class="btn_green" @click="weighing">
                <p>确认</p>
            </div>
        </div>
        <div v-show="step == 2">
            <div class="btn_green" @click="continues">
                <p>继续回收</p>
            </div>
            <div class="btn_green" @click="recoveryComplete">
                <p>完成回收</p>
            </div>
        </div>
    </div>
</template>

<script>
import publics from "@/mixins/public.js";

// 分清楚逻辑
// 回收详情 只是桶的详情
// 步骤分清楚  问清楚

export default {
    data() {
        return {
            list: {},
            step: 1,
            weight: "0.00",
            device_id: "", //外围设备的UUID或MAC地址
            service_uuid: "", //
            characteristic_uuid: "", //
            list: {}, //
            def: "", //
            pin: "", //
        };
    },
    mixins: [publics],
    watch: {},
    created() {
        this.isEnabled();
    },
    methods: {
        continues() {
            // 先把信息发送过去再页面改变
            this.startNotification()
                .then(() => {
                    // 先把重量存起来 再初始化
                    this.weight = "0.00";
                    this.step = 1;
                })
                .catch(() => {});
            this.step = 2;
        },
        weighing() {
            this.stopNotification()
                .then(() => {
                    // 先把重量存起来 再初始化
                    this.weight = "0.00";
                    this.step = 2;
                })
                .catch(() => {});
        },
        rest() {
            this.stopNotification()
                .then(() => {
                    this.weight = "0.00";
                })
                .catch(() => {});
        },
        recoveryComplete() {
            this.disconnect()
                .then(() => {
                    // 带着重量数据 提交后 到详情页
                    this.replaceRouter("/recycle/recyclingDetails");
                })
                .catch(() => {
                    this.replaceRouter("/recycle/recyclingDetails");
                });
        },
        //报告是否启用了蓝牙
        isEnabled() {
            ble.isEnabled(
                (device) => {
                    console.log("蓝牙已启动");
                    this.startScanWithOptions();
                },
                (failure) => {
                    this.enable();
                }
            );
        }, // 提醒用户启动蓝牙
        enable() {
            ble.enable(
                (device) => {
                    console.log("启动蓝牙成功");
                    this.startScanWithOptions();
                },
                (failure) => {
                    this.$toast({ content: "请启动蓝牙功能" });
                }
            );
        },
        // 扫描并发现BLE外设
        startScanWithOptions() {
            ble.startScanWithOptions(
                [],
                { reportDuplicates: false },
                (device) => {
                    // JDY-23A-BLE JDY-23A-SPP
                    if (device.name.substr(0, 7) == "JDY-23A") {
                        this.list = device;
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
                    this.connect();
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
                    // this.$toast({ content: "连接成功" });
                    this.startNotification();
                },
                (failure) => {
                    this.$toast({ content: "连接失败" });
                }
            );
        },
        // 断开连接
        disconnect() {
            return new Promise((resolve, reject) => {
                ble.disconnect(
                    this.device_id,
                    (device) => {
                        resolve("断开连接成功");
                        // this.$toast({ content: "断开连接成功" });
                    },
                    (failure) => {
                        resolve("断开连接失败");
                        // this.$toast({ content: "断开连接失败" });
                    }
                );
            });
        },
        // 注册以在特征值更改时得到通知。
        startNotification() {
            return new Promise((resolve, reject) => {
                ble.startNotification(
                    this.device_id,
                    this.service_uuid,
                    this.characteristic_uuid,
                    (buffer) => {
                        let result = this.ab2hex(buffer);
                        let str = this.hexCharCodeToStr(result);
                        let type = "";
                        let state = Number(
                            "0x" + result.substring(4, 6)
                        ).toString(2);
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
                        // console.log(
                        //     `重量：${Number(
                        //         str.substring(3, 10)
                        //     )}kg (${type}), 电量：${str.substring(12, 14)}%`
                        // );
                        this.weight = str.substring(3, 10);
                        resolve(str.substring(3, 10));
                    },
                    (failure) => {
                        this.$toast({ content: "获取广播失败" });
                        reject("获取广播失败");
                    }
                );
            });
        },
        // 停止特征值广播
        stopNotification() {
            return new Promise((resolve, reject) => {
                ble.stopNotification(
                    this.device_id,
                    this.service_uuid,
                    this.characteristic_uuid,
                    (buffer) => {
                        console.log("停止广播成功");
                        this.$toast({ content: "重置重量成功" });
                        resolve("重置重量成功");
                    },
                    (failure) => {
                        console.log("停止广播失败");
                        this.$toast({ content: "重置重量失败" });
                        reject("重置重量失败");
                    }
                );
            });
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

        // 未使用api
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
    },
};
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: inherit;
    position: relative;
}
.title {
    width: 90%;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: left;
    p {
        font-weight: 600;
        margin-right: 5px;
        color: #242424;
        font-size: 15px;
    }
}
.weight {
    width: 80%;
    height: 100px;
    margin: 0 auto;
    border: 2px solid #00b075;
    border-radius: 7px;
    text-align: center;
    p {
        font-weight: 600;
        line-height: 100px;
        color: #242424;
        font-size: 22px;
    }
}
.btn_green {
    width: 50%;
    height: 48px;
    border-radius: 12px;
    background: #00b075;
    padding: 0;
    margin: 35px auto;
    p {
        text-align: center;
        color: #ffffff;
        line-height: 48px;
        font-size: 14px;
    }
}
.btn_bule {
    width: 30%;
    height: 48px;
    border-radius: 12px;
    background: #29b6f6;
    padding: 0;
    margin: 50px auto;
    p {
        text-align: center;
        color: #ffffff;
        line-height: 48px;
        font-size: 14px;
    }
}
</style>
