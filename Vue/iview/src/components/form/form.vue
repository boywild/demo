<template>
    <div>
        <form>
        	<slot></slot>
        </form>
    </div>
</template>
<script>
export default {
	name:'iForm',
	provide(){
		return {
			form:this
		}
	},
	data(){
		return {
			fields:[]
		}
	},
	props:{
		rules:{
			type: Object
		},
		model:{
			type: Object
		}
	},
	methods:{
		handleTest(params){
			console.log(params)
		}
	},
	created(){
		this.$on('on-form-item-add',(field)=>{
			if(field) this.fields.push(field);
		});
		this.$on('on-form-item-remove',(field)=>{
			if(field) this.fields.push(field);
		});
	}
}
</script>
