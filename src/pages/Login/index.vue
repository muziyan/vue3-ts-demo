<template>
  <div class="login">

    <div class="login-inner">

      <div class="login__title">
        欢迎登录！
      </div>

      <div class="login-form">
        
      </div>
        
    </div>

  </div>
</template>

<script setup lang='ts'>

// change site title 
import { computed } from "@vue/runtime-core";
import useTitle from "../../utils/useTitle";

useTitle(computed(()=> "登录中心"));


</script>

<style lang="scss">
@import "./index.scss"
</style>