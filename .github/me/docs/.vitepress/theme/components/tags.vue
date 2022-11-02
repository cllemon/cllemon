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
  <div
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
  </div>
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
  line-height: 12px;
  border: 0.5px solid transparent;
  border-radius: 6px;
  margin-right: 6px;
  padding: 0 2px;
}

.tag-text {
  transform: scale(0.8);
  display: inline-block;
  font-weight: bold;
  margin: 0 2px;
}
</style>
