<template>
  <Form 
    :class="customClass"
    :="formAttrData"
  >
    <Item 
      v-for="item in list"
      :key="item?.label"
      :label="item?.label"
    >

      <Input
          v-model:value="modal[item?.name]"
          :type="item?.inputAttrType"
          :placeholder="item?.placeholder || ''" 
        />  
    </Item>

    <Item>
      <async-input
        v-model="demo"
        @on-blue="handleDemo"
      />
    </Item>  

    <Item>
      <Button 
        @click="handleConfirm"
        :="buttonAttr(confirm)"
      >
        {{ confirm?.text }}
      </Button>
      <Button 
        v-show="cancel?.show"
        @click="handleCancel" 
        :="buttonAttr(cancel)"
      >
        {{ cancel?.text }}
    </Button>
    </Item>  
  </Form>   
</template>


<script setup lang='ts'>
// components 
import {Form,Input,Button} from "ant-design-vue"
const {Item} = Form;
import asyncInput from "./input";

import { defineProps ,defineEmit,reactive, ref} from "@vue/runtime-core";
import {AsyncFormProp} from "./data"
import type {ModalInterface,ListItemInterface,ButtonType} from "./data"

const props = defineProps({...AsyncFormProp});

let modal:ModalInterface = reactive({});
props?.list?.forEach( (item:ListItemInterface) => {
    modal[item?.name] = null;
})

const buttonAttr = (obj:object)=>{
  if(!obj || !Object.keys(obj).length) return {};
  let arr = ['show','text'];
  let newObj:object = {}
  Object.keys(obj)?.filter(key => {
    if(!arr.includes(key)) return key;
  }).forEach((key:string) => {
      newObj[key] = obj[key]
  })
  return {
    ...newObj
  }
}

const demo = ref("")

const handleDemo=(val) => {
  console.log(val);
}

// emit
const emit = defineEmit(['on-confirm','on-cancel']);
const handleConfirm = ()=>{
  emit("on-confirm",modal)
}
const handleCancel = () => {
  modal = {};
  emit("on-cancel")
}
</script>