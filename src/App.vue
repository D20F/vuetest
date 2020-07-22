<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
export default {
  mixins: [], 
  data(){
    return {
        versionData:''
    }
  },
  created(){
    
   
  },
  methods:{
 
  },
  mounted() {

  },
  beforeDestroy(){
 
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.MaxBox{
  width: 100%;
  height: 100%;
}
.green{
    color: RGB(66,222,181);
}
.gary{
    color: RGB(206,204,207);
}
.blackcard{
    background: black;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
}
div,ul,li,span,p,input{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.img_tile{
  width: 100%;
  height: 100%;
}
.line{
  height: .4rem;
  background: #F9F8FF;
}










.versionBox{
    position: absolute;
    top: 20%;
    z-index: 100;
    width: 80%;
    min-height: 30%;
    left: 10%;
      border-radius: 3rem;
    background: RGB(255,255,255);
}
.verdata{
    margin: 3% 0 3% 3%;
}
.verp{
    text-align: center;
    margin-top: 6%;
    font-size: 2rem;
    color: RGB(39, 224, 173);
}
.cancel{
    width: 10%;
    position: absolute;
    bottom: -28%;
    left: 45%;
}
.confirm{
    background: RGB(39, 224, 173);
    width: 50%;
    height: 4rem;
    font-size: 1.6rem;
    color: RGB(255,255,255);
    border-radius: 0.8rem;
    position: absolute;
    bottom: 10%;
    right: 25%;
    line-height: 4rem;
    text-align: center;
}
input{
    background:none;  
    outline:none;  
    border:none;
    color: RGB(179,179,179);
}
input::-webkit-input-placeholder{
    color: RGB(179,179,179);
}
</style>
