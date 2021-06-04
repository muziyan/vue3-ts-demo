<template>
  <div class="login">

    <div class="login-inner">

      <div class="login__title">
        欢迎登录！
      </div>

      <AsyncForm 
        :custom-class="data.customClass"
        :form-attr-data="data.formAttrData"
        :list="data.list"
        :confirm="data.confirm"
        :cancel="data.cancel"
        @on-confirm="handleSubmit"
        @on-cancel="handleCancel"
      />

    </div>

  </div>
</template>

<script setup lang='ts'>
import { computed, inject } from "@vue/runtime-core";
import AsyncForm from "../../components/AsyncForm/index.vue";

import useTitle from "../../utils/useTitle";

import type { MessageApi } from "ant-design-vue/lib/message";
const message : MessageApi | undefined= inject("$message")

// change site title 
useTitle(computed(()=> "登录中心"));

import { reactive } from "@vue/reactivity"
import type {AsyncFormPropsInterface} from "../../components/AsyncForm/data"


const data:AsyncFormPropsInterface = reactive({
  customClass:"login-form",
  formAttrData:{
    wrapperCol:{
      span:24
    }
  },
  list:[
    {
      label:"账户",
      name:"account",
      inputType:"text",
      inputAttrType:"text",
      placeholder:"请输入账号",
      size:""
    },
    {
      label:"密码",
      name:"password",
      inputType:"text",
      inputAttrType:"password",
      placeholder:"请输入密码"
    }
  ],
  confirm:{
    text:"登录",
    type:"primary",
    block:true
  },
  cancel:{
    text:"重置",
    show:true,
    type:"danger",
    block:true
  }
})


import {useRouter} from "vue-router"
const router = useRouter();
const handleSubmit = async (modal:object)=>{
  message?.success("登录成功!");
  router.push({name:"home"})
}

const handleCancel = ()=>{

}


</script>

<style lang="scss">
@import "./index.scss"
</style>