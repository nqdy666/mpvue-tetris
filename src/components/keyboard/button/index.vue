<template>
  <div class="button" :class="color+' '+size" :style="'top:'+top+'px;'+'left:'+left+'px'"
    @touchstart.stop="$emit('m_touchstart')"
    @touchend.stop="$emit('m_touchend')">
    <i :class="{'active':active}" />
    <em :style="'transform:'+arrow+' scale(1,2)'" v-show="size==='s1'" />
    <span :class="position?'position':''">
      {{label}}
    </span>
  </div>
</template>
<script src="./index.js">
</script>

<style src="./index.css"></style>
