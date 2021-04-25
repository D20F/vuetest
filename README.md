
### 目录结构

└─  src
    ├─ assets               项目公共资源
    ├─ api                  网络请求     
    ├─ components           项目公共组件
    ├─ directive            指令
    ├─ mixins               混入
    ├─ icons                图标
    ├─ layout               布局
    ├─ plugins              外挂程序设置
    ├─ config               配置
    ├─ router               路由
    ├─ styles               公共css
    ├─ store                vuex
    ├─ utils                常用工具
    ├─ views                页面
    ├─ app                  vue入口
    ├─ main                 入口
    ├─ permission           路由守卫
    └─ settings             网页设置

## cordova 注意事项
1. main.js 注册vue实例时 要使用deviceready回调注册
``` js
    document.addEventListener('deviceready', vue, false);
```
2. index.html 加入 cordova.js 标签
``` js
    <script type="text/javascript" src="cordova.js"></script>
```
## eosjs
eosjs/dist/eosjs-numeric.js
添加 || s.substr(0, 3) === 'BAZ'

## 数字滚动库
vue-countTo

## 代替 window.open 用来打开手机其他app
cordova-plugin-inappbrowser
## 文件
cordova plugin add cordova-plugin-file
## 文件传输
cordova plugin add cordova-plugin-file-transfer
## 相机
cordova plugin add cordova-plugin-camera
## 蓝牙
cordova plugin add cordova-plugin-ble-central

## 使用loading提示
this.$loading({
    content:'',
    mask:true,
    icon:true,
})
this.$toast({
    content:'',
})
this.$loadingHide()
## 路由参数
this.$route.query

## cordova 默认https 想用http需要配置

test 组件 蓝牙实验 可以删除
还有冗余没有删除掉

蓝牙  --- 未实验
rfid  --- 未完成


小程序增加提现
检查一遍测试

