<script setup lang="ts">
import VPHeader from "./VPHeader.vue";
import VPContent from "./VPContent.vue";
import VPFooter from "./VPFooter.vue";
</script>

<template>
  <ClientOnly>
    <div class="CLayout">
      <VPHeader />

      <main class="CVPMain">
        <VPContent />
        <VPFooter />
      </main>
    </div>
  </ClientOnly>
</template>

<style scoped lang="less">
.CLayout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .CVPMain {
    flex: 1;
    background-color: var(--bg-color);
    padding: 32px 32px 0;

    box-sizing: content-box;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      border-radius: 3px;
    }
  }
}

@media (max-width: 900px) {
  .CLayout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 375px;
    overflow: hidden;

    .CVPMain {
      /*  */
    }
  }
}
</style>
