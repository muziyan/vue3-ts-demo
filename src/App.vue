<template>
  <Loading 
    type="full"
    :loading="loading"
    animation-color="#000"
    loading-text="加载中"
  />
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import Loading from "./components/Loading/index"
const flag = ref(true);
const loading = ref(true)

setTimeout(()=>{
  loading.value = false;
},3000);

</script>

<style>
  body{
    background-color: aquamarine;
  }
</style>
