<template>

  <AsyncForm 
    :list="fromData.list"
  />

  
</template>

<script setup lang='ts'>
import { reactive, ref } from "@vue/reactivity";
import AsyncForm from "../../components/AsyncForm/index.vue";
import type {AsyncFormPropsInterface} from "../../components/AsyncForm/data";
import useTitle from "../../utils/useTitle";
useTitle(ref("首页"));


const fromData:AsyncFormPropsInterface = reactive({
  list:[

  ]
})


</script>

<style>

</style>