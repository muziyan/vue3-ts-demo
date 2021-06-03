<template>
  <Form :class="props?.customClass">
    <Item 
      v-for="item in props.list"
      :key="item.label"
      :label="item.label"
    >
      <Input
          v-model:value="modal[item?.name]"
          :type="item.type"
          :placeholder="item?.placeholder || ''" 
        />

    </Item>

    <Item>
      <Button @click="confirm">{{ props.confirmBtnText }}</Button>
      <Button @click="cancel" v-show="props.isCancelBtn">{{ props.cancelBtnText }}</Button>
    </Item>  
  </Form>   
</template>

<script setup lang='ts'>
// components 
import {Form,Input,Button} from "ant-design-vue"
const {Item} = Form;


type listType = "text" | "password" | "number" | "radio" | "select" | "time" | "upload" 

interface PropsInterface {
  customClass?:string,
  list:Array<ListItemInterface>,
  comfirm:Object,
  cancel:Object
}

interface ListItemInterface {
  label?:string,
  name:string,
  type:listType,
  placeholder?:string
}

import { defineProps ,defineEmit,reactive} from "@vue/runtime-core";
// props 
const props = defineProps<PropsInterface>()

const modal = reactive({});
props.list.forEach((item):void => {
    modal[item?.name] = null;
})

// emit
const emit = defineEmit(['on-canfirm','on-cancel']);
const confirm = ()=>{
  emit("on-canfirm",modal)
}
const cancel = () => {
  emit("on-cancel")
}


</script>