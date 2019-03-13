<template>
  <div id="app">
    <i-form :model="formValidate" :rule="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="email">
        <i-input v-model="formValidate.email"></i-input>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import iForm from "./components/form/form.vue";
import iFormItem from "./components/form/formItem.vue";
import iInput from "./components/form/input.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    iForm,
    iFormItem,
    iInput
  },
  data(){
    return {
      formValidate:{
        name:'',
        email:''
      },
      ruleValidate:{
        name:[{
			required:true,message:'用户名不能为空',trigger:'blur'
		}],
		email:[
			{required:true,message:'邮箱不能为空',trigger:'blur'},
			{type:'email',message:'邮箱格式错误',trigger:'blur'}
		]
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
