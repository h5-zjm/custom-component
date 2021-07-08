<template>
    <div>
        <input :type="type" :value="value" @input="handerInput" v-bind="$attrs">
    </div>
</template>
<script>
    export default {
      name:'ZjInput',
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
        handerInput(e){

          this.$emit('input',e.target.value)
          //找父组件form-item
          const findParent=parent=>{
            while (parent){
              console.log(parent.$options.name)
              if(parent.$options.name=='LgFormItem'){
                break;
              }else{
                parent=parent.$parent
              }

            }
            return parent
          }
          console.log(222)
          const parent=findParent(this.$parent)
          console.log(parent)
          if(parent){

            parent.$emit('validate')
          }
        }
      }
    }
</script>
