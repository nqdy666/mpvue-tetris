<template>
  <div class="number">
    <span v-for="(item,index) in data" :key="index" :class="'bg s_'+item" />
  </div>
</template>

<script src="./index.js">
</script>

<style src="./index.css"></style>
