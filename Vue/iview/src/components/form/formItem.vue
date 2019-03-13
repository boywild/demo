<template>
    <div>
        <label v-if="label" :class="{'i-form-item-label-required':isRequired}">{{label}}</label>
        <div>
            <slot></slot>
            <div v-if="validateState" class='i-form-item-message'>{{validateMessage}}</div>
        </div>
    </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from "../../mixins/emitter.js";
export default {
    name:'iFormItem',
    inject:['form'],
    mixins:[Emitter],
    props:{
        label:{
            type: String,
            default: ''
        },
        prop:{
            type: String
        },
        isRequired:false
    },
    data(){
        return {
            validateState:'',
            validateMessage:''
        }
    },
    computed:{
        fieldValue(){
            return this.form.model[this.prop]
        }
    },
    methods:{
        setRules(){
            let rules=this.getRules();
            if(rules.length){
                rules.every((rule)=>{
                    this.isRequired=rule.required;
                });
            }
            this.$on('on-from-blur',this.onFieldBlur);
            this.$on('on-form-change',this.onFieldChange);
        },
        getRules(){
            let formRules=this.form.rule;
            formRules=formRules?formRules[this.prop]:[];
            return [].concat(formRules||[])
        },
        getFilteredRule(trigger){
            const rules=this.getRules();
            return rules.filter(rule=>!rule.trigger||rule.trigger.indexOf(trigger)!==-1);
        },
        validate(trigger,callback=function(){}){
            let rules=this.getFilteredRule(trigger);
            if(!rules||rules.length===0){
                return true;
            }
            this.validateState='validating';
            let descriptor={};
            descriptor[this.prop]=rules;
            const validator=new AsyncValidator(descriptor);
            let model={}
            model[this.prop]=this.fieldValue;
            validator.validate(model,{firstFeilds:true},errors=>{
                this.validateState=!error?'success':'error';
                this.validateMessage=errors?errors[0].message:'';
                callback(this.validateMessage);
            });
        },
        resetField(){
            this.validateState='';
            this.validateMessage='';
            this.form.model[this.prop]=this.initialValue;
        },
        onFieldBlur(){
            this.validate('blur');
        },
        onFieldChange(){
            this.validate('change');
        }
    },
    mounted(){
        if(this.prop){
            this.dispatch('iForm','on-form-item-add',this);
            this.initiaValue=this.fieldValue;
            this.setRules();
        }

    },
    beforeDestroy(){
        this.dispatch('iForm','on-form-item-remove',this);
    }
}
</script>
<style>
.i-form-item-label-required:before {
    content: '*';
    color: red;
}
.i-form-item-message {
    color: red;
}
</style>


