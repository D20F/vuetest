<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test :data='this.s' msg='Welcome to' @ccc="q"  ref="child"/>
    <h1 @click="$refs.child.s(1)">click</h1>
    <h1 >{{n}}</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  data(){
    return {
        s:[{c:1},{c:2}],
        n:1
    }
  },
  methods:{
    q(){
      this.n += 1;
    },
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
