<script setup lang="ts">
import VPContent from "./VPContent.vue";
import VPFooter from "./VPFooter.vue";
</script>

<template>
  <main class="CVPMain">
    <VPContent />
    <VPFooter />
  </main>
</template>

<style scoped lang="less">
.CVPMain {
  flex: 1;
  background-color: var(--bg-color);
  padding: 32px 32px 0;

  overflow-y: scroll;
  box-sizing: content-box;
  overflow-x: hidden;
}

@media (max-width: 900px) {
  .CVPMain {
  }
}
</style>
