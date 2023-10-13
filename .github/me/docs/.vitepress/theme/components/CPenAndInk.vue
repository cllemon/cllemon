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
    <div class="extra">
      <div class="date">{{ article.date }}写于{{ article.position }}</div>
      <div class="label" v-if="article.label" v-for="label of article.label">
        {{ label }}
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import "../style/utils.less";

.CPenAndInk {
  margin-left: 32px;
  margin-bottom: 56px;

  .title {
    width: 70%;
    font-size: 18px;
    font-weight: 900;
    color: var(--vp-c-text-1);
    text-decoration: none;

    .ellipsis(1);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .desc {
    opacity: 0.9;
    line-height: 1.2;
    font-size: 15px;
    .ellipsis(3);
  }

  .extra {
    display: flex;
    align-items: center;
    line-height: 1.2;
    font-size: 13px;

    .date {
      margin-right: 4px;
    }

    .label {
      user-select: none;
      border: 1px dotted;
      border-radius: 4px;
      padding: 2px 4px;
      font-size: 12px;
      transform: scale(0.8);
      font-weight: 500;
      box-shadow: var(--vp-shadow-1);
    }
  }

  & > * {
    margin-bottom: 8px;
  }
}

@media (max-width: 900px) {
  .CPenAndInk {
    margin-left: 0px;

    .title {
      width: 80%;
    }
  }
}
</style>
