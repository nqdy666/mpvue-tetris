<template>
  <div class="matrix">
    <p v-for="(m, index) of matrix" :key="index">
      <b v-for="(item, itemIndex) of m" :key="itemIndex" :class="item === 1 ? 'c' : '' + item === 2 ? 'd' : ''"></b>
    </p>
  </div>
</template>
<script src="./index.js">
</script>

<style src="./index.css"></style>
