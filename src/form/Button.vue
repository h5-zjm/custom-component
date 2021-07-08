<template>
    <div>
        <button :type="type" :value="value" @click="handerClick" v-bind="$attrs">
            <slot></slot></button>
    </div>
</template>
<script>
  export default {
    name:'LgButton',
    inheritAttrs:false,//禁用父组件传过来的属性
    props:{
      value:{
        type:String
      },
      type:{
        type:String,
        default:'text'
      }
    },
    methods:{
      handerClick(e){
        this.$emit('click',e)
        e.preventDefault()
      }
    }
  }
</script>
