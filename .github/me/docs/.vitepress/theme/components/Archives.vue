<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const props = defineProps<{
  name: string;
}>();

const { page } = useData();
const archives = computed(() => {
  const list = (page.value as any).articles?.[props.name] || [];
  return list.reduce((pre, cur) => {
    const year = new Date(cur.date || new Date()).getFullYear();
    const orginYear = pre[year] ? pre[year] : [];
    pre[year] = orginYear.concat(cur);
    return pre;
  }, {});
});
const date = (d: string) =>
  new Date(d).toDateString().split(" ").slice(0, 3).join(" ");
</script>

<template>
  <section class="archives">
    <template :key="key" v-for="(archive, key) in archives">
      <h3 class="title">{{ key }}</h3>
      <ul class="archive">
        <li v-for="article of archive" :key="article.title" class="article">
          <a class="article-title" :href="`./${article.href}`">
            <sup class="source" v-if="article.source">{{ article.source }}</sup>
            {{ article.title }}
          </a>
          <div class="article-info">
            <span class="date">{{ date(article.date) }}</span>
            <Tags :list="article.tags || []" />
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
  /* cursor: pointer; */
}

.article-title {
  margin-right: 4px;
  font-size: 13px;
  color: inherit;
  cursor: pointer;
  font-weight: 600;
  font-family: serif;
  width: fit-content;
}

.article-info {
  padding-left: 38px;
  opacity: 0.8;
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
  margin-right: 4px;
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
  margin-top: -4px;
}
</style>
