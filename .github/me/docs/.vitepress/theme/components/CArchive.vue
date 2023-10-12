<script setup lang="ts">
import { useData } from "vitepress";
import dayjs from "dayjs";

const { page } = useData();
</script>

<template>
  <section
    class="CArchive"
    v-for="year of Object.keys(page.archives).reverse()"
  >
    <div class="year">{{ year }}</div>
    <div class="list">
      <div v-for="article of page.archives[year]" class="item">
        <div class="date">{{ dayjs(article.time).format("MM-DD") }}</div>
        <a class="title" :href="article.href">{{ article.title }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../style/utils.less";

.CArchive {
  position: relative;
  padding: 32px 0;
  margin-bottom: 32px;
  margin-left: 32px;

  .year {
    position: absolute;
    top: 0;
    font-weight: bold;
    font-size: 18px;
  }

  .list {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 6px;

      .date {
        opacity: 0.8;
        margin-right: 12px;
      }
      .title {
        flex: 1;
        .ellipsis(1);
        text-decoration: underline;
        text-decoration-thickness: from-font;
        text-underline-position: from-font;
      }
    }
  }
}

@media (max-width: 900px) {
  .CArchive {
    margin-left: 6px;
  }
}
</style>
