<template>
    <div class="">
        {{data}}        
        <button @click="callfather">调用父组件函数</button>        
    </div>
</template>
<script>


export default {
    props:['data'],
    data(){
        return {
            
        }
    },
    created(){
      
    },
    methods:{
       callfather(){
            this.$emit('father', '调用父组件函数')
       },
       childfun(val){
           console.log('父组件调用子组件函数',val)
       }
    },
    computed:{
        
    }
}
</script>
<style scoped>
div{position: relative;vertical-align: top;}
p{margin: 0;}
.maxBOX{
    font-size: 1.5rem;
     width: 100%;
    height: 100%;
}



</style>