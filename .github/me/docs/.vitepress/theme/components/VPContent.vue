<script setup lang="ts">
import { computed, inject, provide, ref } from "vue";
import { useRoute, useData } from "vitepress";
import VPDocFooter from "vitepress/dist/client/theme-default/components/VPDocFooter.vue";

const route = useRoute();
const { frontmatter } = useData();
// const { hasSidebar } = useSidebar()

const NotFound = inject("NotFound");

const pageName = computed(() =>
  route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
);

const onContentUpdated = ref();
provide("onContentUpdated", onContentUpdated);
</script>

<template>
  <!-- 'has-sidebar': hasSidebar, -->
  <div
    class="VPContent"
    id="VPContent"
    :class="{
      'is-home': frontmatter.layout === 'home',
    }"
  >
    <!-- <NotFound v-if="route.component === NotFound" /> -->

    <div class="content">
      <div class="content-container">
        <main class="main">
          <Content
            class="vp-doc"
            :class="pageName"
            :onContentUpdated="onContentUpdated"
          />
        </main>

        <slot name="doc-footer-before" />
        <VPDocFooter />
        <slot name="doc-after" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPContent {
  flex-grow: 1;
  flex-shrink: 0;
  margin: var(--vp-layout-top-height, 0px) auto 0;
  width: 100%;
}

.VPContent.is-home {
  width: 100%;
  max-width: 100%;
}

.VPContent.has-sidebar {
  margin: 0;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: var(--vp-nav-height);
  }

  .VPContent.has-sidebar {
    margin: var(--vp-layout-top-height, 0px) 0 0;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
    padding-left: calc(
      (100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)
    );
  }
}
</style>
