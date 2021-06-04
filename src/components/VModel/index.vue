<template>
  <button @click="handleClick">click</button>
  <p>{{ props.value }}</p>
  <input type="text" :value="tempValue" @input="handleInput">
</template>

<script setup lang='ts'>
import {defineProps,defineEmit, computed} from "vue"

const props = defineProps(['value'])

const emit = defineEmit(['update:value']);

const handleClick = ()=>{
  emit("update:value","测试")
}

const tempValue = computed(()=>{
  return props.value
})

const handleInput = function(e:Event){
  const {target} = e as any;
  emit("update:value",target.value);
}

</script>

<style>

</style>