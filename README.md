
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

## 数字滚动库
vue-countTo

eosjs/dist/eosjs-numeric.js
添加 || s.substr(0, 3) === 'BAZ'


this.$store.dispatch("system/add_notify", {
    type: "success",
    data: "复制成功",
    time: 2000,
});
    