<template>
  <input type="text" :value="currentValue" @input='handleInput' @blur="handleBlur" >
</template>
<script>
import Emitter from "../../mixins/emitter.js";
export default {
  name: "iInput",
  mixins: [Emitter],
  data(){
      return {
          currentValue:''
      }
  },
  methods: {
    handleInput(){},
    handleBlur(){}
  },
  mounted(){
      if(this.props){
          this.dispatch('iFormItem','on-form-blur');
          this.dispatch('iFormItem','on-form-change');
      }
  }
};
</script>
