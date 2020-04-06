<template>
  <div class="hello">
    <h1>{{ data[0].c }}</h1>
    <h1>{{ data[1].c }}</h1>
    <h1>{{ msg }}</h1>
    <h1>t{{ n }}</h1>
    <h1 @click="$emit('ccc')" >clickt</h1>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: ['data','msg'],
  data(){
    return{
      n:1
    }
  },
  created(){


  },
  methods:{
    s(data){
      this.n += data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;                              
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
