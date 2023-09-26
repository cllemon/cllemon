<script setup lang="ts">
import VPHeader from "./VPHeader.vue";
import VPMain from "./VPMain.vue";
</script>

<template>
  <div class="CLayout">
    <VPHeader />
    <VPMain />
  </div>
</template>

<style scoped>
.CLayout {
  display: flex;
  height: 100vh;
}

@media (max-width: 900px) {
  .CLayout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 414px;
    overflow: hidden;
  }
}
</style>
