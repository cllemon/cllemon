<script setup lang="ts">
import { computed, inject, provide, ref } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();
const pageName = computed(() =>
  route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
);

const onContentUpdated = ref();
provide("onContentUpdated", onContentUpdated);
const NotFound = inject("NotFound");
</script>

<template>
  <div class="CVPContent">
    <NotFound v-if="route.component === NotFound" />

    <div class="content" v-else>
      <div class="content-container">
        <main class="main">
          <Content
            class="vp-doc"
            :class="pageName"
            :onContentUpdated="onContentUpdated"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.CVPContent {
  min-height: 84%;

  // .vp-doc {
  //   div h2:first-child {
  //     border-top: none !important;
  //   }
  // }
}
</style>
