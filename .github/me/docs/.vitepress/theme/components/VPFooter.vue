<script setup lang="ts">
import { useData } from "vitepress";

const { theme } = useData();
</script>

<template>
  <footer v-if="theme.footer" class="VPFooter">
    <div class="container">
      <p
        v-if="theme.footer.message"
        class="message"
        v-html="theme.footer.message"
      ></p>
      <p
        v-if="theme.footer.copyright"
        class="copyright"
        v-html="theme.footer.copyright"
      ></p>

      <!-- 访问统计 -->
      <p class="access">
        <span id="busuanzi_container_site_pv">
          本站访问数 <span id="busuanzi_value_site_pv"></span>
        </span>
        <span id="busuanzi_container_site_uv">
          本站访客数 <span id="busuanzi_value_site_uv"></span>
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="less">
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 24px;
  margin-top: 32px;
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.message {
  order: 2;
}
.copyright {
  order: 1;
}

.access {
  font-size: 11px;
  font-weight: 300;

  .busuanzi_container_site_pv,
  .busuanzi_container_site_uv {
    margin: 0px 4px;
  }
}
</style>
