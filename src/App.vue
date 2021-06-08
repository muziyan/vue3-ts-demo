<template>
  <VModel 
    :value="value"
  />
</template>

<script lang="ts" setup>

import { ref } from "@vue/reactivity";
import VModel from "./components/VModel/index";

const value = ref("");

</script>

<style>

</style>
