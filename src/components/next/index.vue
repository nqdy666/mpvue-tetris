<template>
  <div class="next">
    <div v-for="(item, index) in block" :key="index">
      <b v-for="(e, itemIndex) in item" :key="itemIndex" :class="e ? 'c' : ''"  />
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style src="./index.css"></style>
