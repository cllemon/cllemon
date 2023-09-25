<script setup lang="ts">
import VPHeader from "./VPHeader.vue";
import VPMain from "./VPMain.vue";
</script>

<template>
  <div class="CLayout">
    <VPHeader class="CVPHeader" />
    <VPMain class="CVPMain" />
  </div>
</template>

<style scoped>
.CLayout {
  display: flex;
  min-height: 100vh;

  .CVPHeader {
    width: 48%;
    background-color: #202226;
  }

  .CVPMain {
    flex: 1;
    background-color: #faf9f5;
  }
}

@media (max-width: 827px) {
  .CLayout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    min-width: 414px;
    overflow: hidden;

    .CVPHeader {
      width: 100%;
      min-height: 200px;
      background-color: #202226;
    }

    .CVPMain {
      /* flex: 1; */
      background-color: #faf9f5;
    }
  }
}
</style>
