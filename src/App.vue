<template>
  <router-view :key="path"></router-view>
</template>

<script lang="ts" setup>

// get current route path
import getCurrentRoute from "./utils/currentRoutePath";   
const {path} = getCurrentRoute();


</script>

<style>

</style>
