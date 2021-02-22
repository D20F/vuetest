// // 高德     只能用做微信小程序定位
// import amap from './amap-wx.130'
// let key = '6f104ffadb1ff3ecca48118154173d0d';
// let amapPlugin = new amap.AMapWX({
//     key: key
// });

// export let getLatitude = () => {
//     return new Promise((resolve, reject) => {
//         amapPlugin.getRegeo({  
//             success: (data) => {  
//                 resolve(data)
//             } ,
//             fail: (err) => {  
//                 reject(err)
//             }
//         });  
//     })
// }

// export let getPlace = () => {
//     return new Promise((resolve, reject) => {
//         amapPlugin.getRegeo({  
//             success: (data) => {  
//                 console.log('市名', data[0].regeocodeData.addressComponent.city)
//                 resolve(data[0].regeocodeData.addressComponent.city)
//             } ,
//             fail: (err) => {  
//                 reject(err)
//             }
//         });  
//     })
// }


// 用法
// this.$nextTick(() => {
//     let Prism = require("@/utils/map/index");
//     Prism.init('container');
// });
// 在地图绘制点 坐标 点显示详细信息 我都没看 可以慢慢看
// 高德  web端   name为id
let key = 'af03e24afc46e68e83a70eb8062edf31';
export let init = () => {
    window.onLoad = function () {
        let map;
        map = new AMap.Map('container', {
            zoom:13
        });
        
        let s = map.getCenter();
        console.log(s)
        map.setCenter([s.R,s.Q]); 
        // map.setZoomAndCenter(15, [113.322455,23.095901]);

    }
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
}






