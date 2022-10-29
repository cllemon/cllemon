<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  list: string[];
}>();

const tags = computed(() =>
  props.list.map((tag) => {
    const REG = /(#[a-zA-Z0-9]{3,8})/g;
    const [content, bg, , color, , border] = tag.split(REG, 6);
    return { content, bg, color, border };
  })
);
</script>

<template>
  <!-- <div class="tags"> -->
  <span
    v-for="(tag, index) of tags"
    :key="index"
    :style="{
      color: tag.color,
      backgroundColor: tag.bg,
      borderColor: tag.border
        ? tag.border
        : !tag.bg
        ? 'inherit'
        : 'transparent',
    }"
    class="tag"
  >
    <span class="tag-text">{{ tag.content }}</span>
  </span>
  <!-- </div> -->
</template>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  border: 0.5px solid transparent;
  border-radius: 2em;
  margin-right: 6px;
}

.tag-text {
  transform: scale(0.7);
  display: inline-block;
  font-weight: bold;
}
</style>
