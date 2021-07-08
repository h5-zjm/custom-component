<template>
    <div>
        <label>{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errorMessage">
                {{errorMessage}}
            </p>
        </div>
    </div>
</template>
<script>
    import AsyncValidator from 'async-validator'
  export default {
    name:'LgFormItem',
    props:{
      label:{
        type:String
      },
      prop:{
        type:String
      }
    },
    inject:['form'],
    data(){
      return{
        errorMessage:''
      }
    },
    mounted(){
      this.$on('validate',()=>{
        console.log(111)
        this.validate()
      })
    },
    methods:{
      validate(){
        if(!this.prop)return
        console.log(this.form)
        const value=this.form.model[this.prop]

        const rules=this.form.rules[this.prop]
        const descriptor={[this.prop]:rules}
        const validator=new AsyncValidator(descriptor)
        return validator.validate({[this.prop]:value},error=>{
          if(error){
            this.errorMessage=error[0].message
          }else{
            this.errorMessage=''
          }
        })
      }
    }
  }
</script>
