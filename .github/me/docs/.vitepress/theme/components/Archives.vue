<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const props = defineProps<{
  name: string;
}>();

const { page } = useData();
const archives = computed(() => {
  const list = (page.value as any).articles?.[props.name] || [];
  const result = list.reduce((pre, cur) => {
    const year = new Date(cur.date || new Date()).getFullYear();
    const orginYear = pre[year] ? pre[year] : [];
    pre[year] = orginYear.concat(cur);
    return pre;
  }, {});
  return descendingOrder(result);
});
const date = (d: string) =>
  new Date(d).toDateString().split(" ").slice(0, 3).join(" ");

const descendingOrder = (archives: Record<string, unknown>) => {
  return Object.entries(archives)
    .map(([k, v]) => ({ title: k, articles: v }))
    .sort((a, b) => +b.title - +a.title);
};
</script>

<template>
  <section class="archives">
    <template v-for="(archive, index) of archives" :key="index">
      <h3 class="title">{{ archive.title }}</h3>
      <ul class="archive">
        <li
          v-for="article of archive.articles"
          :key="article.title"
          class="article"
        >
          <sup class="source" v-if="article.source">{{ article.source }}</sup>
          <a class="article-title" :href="`./${article.href}`">
            {{ article.title }}
          </a>
          <div class="article-info">
            <span class="date">{{ date(article.date) }}</span>
            <Tags :list="article.tags || []" style="margin-top: 2px" />
          </div>
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
.archives {
}

.title {
  font-size: 130px;
  font-family: serif;
  opacity: 0.1;
  margin-left: 20px;
  margin-bottom: -30px;
  z-index: -100;
  font-weight: 300;
}

.archive {
  padding-bottom: 80px;
}

.archive .article {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 24px;
  position: relative;
}

.article-title {
  margin-right: 4px;
  /* font-size: 15px; */
  color: inherit;
  cursor: pointer;
  font-weight: 500;
  width: fit-content;
  padding-left: 30px;
}

.article-info {
  padding-left: 30px;
  opacity: 0.9;

  display: flex;
  align-items: center;
}
.article:hover .article-info {
  opacity: 1;
  user-select: none;
}
.date {
  opacity: 0.8;
  font-size: 12px;
  font-family: monospace;
  font-weight: 100;
  margin-right: 10px;
}

.source {
  vertical-align: middle;
  border: 1px dashed #9e9e9e;
  border-radius: 4px;
  font-size: 12px;
  padding: 2px 4px;
  transform: scale(0.6);
  display: inline-block;
  line-height: 1;
  position: absolute;
  top: 3px;
  left: -2px;
}
</style>
