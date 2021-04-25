/*用法
this.$nextTick(() => {
    let Prism = require("@/utils/map/index");
    Prism.init();
});*/
/* <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=af03e24afc46e68e83a70eb8062edf31"></script> */ 
// 在地图绘制点 坐标 点显示详细信息 我都没看 可以慢慢看
// 高德  web端   name为id
let key = 'af03e24afc46e68e83a70eb8062edf31';
let map;
let marker;
export let init = (res) => {
    window.onLoad = function () {
        map = new AMap.Map('container', {
            zoom: 13,
            center: [res.longitude, res.latitude],
        });

        let adr = map.getCenter();
        map.setCenter([adr.R,adr.Q]); 
        map.setZoomAndCenter(15, [adr.R,adr.Q]);

        var endIcon = new AMap.Icon({
            size: new AMap.Size(30, 30),
            image: require('@/static/img/home/map/map_bin_selected.png'),
            imageSize: new AMap.Size(30, 30),
        });

        marker = new AMap.Marker({
            icon: endIcon,
            position: [adr.R,adr.Q],
            label: { content: `<p style="font-size: 14px;color: #242424;">${res.name}</p>`, direction: 'top' }
        });
        map.add(marker);
    }
    
    // 地图未完成 可以使用直接唤醒地图的方式去完成这个  
    // = = 之前怎么没想到

    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
}
export let moveMap = (res) => {
    map.panTo([res.longitude, res.latitude]);
}
export let openMap = (res) => {
    marker.markOnAMAP({
        name:res.name,
        position:[res.longitude, res.latitude]
    })
}
  
