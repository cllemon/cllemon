<script setup lang="ts">
import { useData } from "vitepress";

const { page } = useData();
</script>

<template>
  <section
    class="CPenAndInk"
    v-for="article of page.articles"
    :key="article.title"
  >
    <a class="title" :title="article.title" :href="article.href">
      {{ article.title }}
    </a>
    <div class="desc">
      {{ article.desc }}
    </div>
    <div class="date">{{ article.date }}写于{{ article.position }}</div>
  </section>
</template>

<style lang="less" scoped>
@import "../style/utils.less";

.CPenAndInk {
  transition: all ease 0.3s;
  margin-bottom: 56px;

  .title {
    width: 70%;
    font-size: 22px;
    font-weight: 900;
    color: var(--vp-c-text-1);

    .ellipsis(1);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .desc {
    line-height: 1.2;
    opacity: 0.8;
    font-size: 16px;
    .ellipsis(3);
  }

  .date {
    opacity: 0.8;
    font-size: 13px;
    line-height: 1.2;
  }

  & > * {
    margin-bottom: 8px;
  }

  &:hover {
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .CPenAndInk {
    .title {
      width: 80%;
    }
  }
}
</style>
