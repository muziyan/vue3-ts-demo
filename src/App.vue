<template>
</template>

<script lang="ts" setup>
import Editor from "./components/Editor/index"


</script>

<style>
  body{
    margin:0;
    padding:0;
    min-width: 100vw;
    min-height: 300vh;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
    background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
    background-size: 100% calc(100% - 100vh + 5px);
    background-repeat: no-repeat;
  }

  body::after{
    content: "";
    position: fixed;
    top: 5px;
    left: 0;
    bottom: 0;
    right: 0;
    background:aquamarine;
    z-index: -1;
  }
</style>
