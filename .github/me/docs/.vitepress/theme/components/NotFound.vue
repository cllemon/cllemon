<script setup lang="ts">
// import { useData } from "vitepress";

// const { site } = useData();
</script>

<template>
  <div class="NotFound">
    <p class="code">404</p>
    <!-- <h1 class="title">页面不存在</h1> -->
    <div class="divider" />
    <blockquote class="quote">
      但如果你不改变方向，继续寻找，你最终可能会到达你要去的地方。
    </blockquote>

    <div class="action">
      <a class="link" href="/cllemon/writing" aria-label="go to home">
        带我回家
      </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 0.8px solid;
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  /* color: var(--vp-c-brand); */
  transition: border-color 0.25s, color 0.25s;
  opacity: 0.6;
  transition: all ease 0.3s;
}

.link:hover {
  opacity: 1;
}
</style>
