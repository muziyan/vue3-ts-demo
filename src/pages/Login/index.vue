<template>
  <div class="login">

    <div class="login-inner">

      <div class="login__title">
        欢迎登录！
      </div>

      <AsyncForm 
        custom-class="login-form"
        :list="list"
        :is-cancel-btn="true"      
        @on-canfirm="handleSubmit"
        @on-cancel="handleCancel"
      />

    </div>

  </div>
</template>

<script setup lang='ts'>
import { computed, inject, reactive } from "@vue/runtime-core";
import AsyncForm from "../../components/AsyncForm/index.vue";

import useTitle from "../../utils/useTitle";

import type { MessageApi } from "ant-design-vue/lib/message";
const message : MessageApi | undefined= inject("$message")

// change site title 
useTitle(computed(()=> "登录中心"));


const list = reactive([
  {
    label:"账户",
    type:"text",
    name:"account",
    placeholder:"请输入账号"
  },
  {
    label:"密码",
    type:"password",
    name:"password",
    placeholder:"请输入密码"
  }
])

const modal = reactive({
  account:""
})

const handleSubmit = async (modal)=>{
  console.log(modal)
}

const handleCancel = ()=>{

}


</script>

<style lang="scss">
@import "./index.scss"
</style>