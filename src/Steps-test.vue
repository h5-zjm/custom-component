<template>
    <div>
        <Steps :count="count" :active="active"></Steps>
        <button @click="next">下一步</button>
    </div>
</template>
<script>
    import Steps from './Steps'
    export default {
      data(){
        return{
          count:4,
          active:0
        }
      },
      components:{
        Steps
      },
      methods:{
        next(){
          if(this.active<this.count)
          this.active++
        },
      }
    }
</script>
