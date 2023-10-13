<script setup lang="ts">
import { useData } from "vitepress";

const { page } = useData();
</script>

<template>
  <section class="CCollection">
    <div class="category" v-for="category of page.frontmatter.list">
      <div class="name">
        {{ category.name }}
      </div>

      <div class="list">
        <template v-for="item of category.list">
          <a
            class="item"
            target="blank"
            v-if="item.title"
            :key="item.title"
            :href="item.link"
          >
            <div class="title">{{ item.title }}</div>
            <div
              class="image"
              v-if="item.image"
              :style="{ backgroundImage: `url(${item.image})` }"
            />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../style/utils.less";

.CCollection {
  position: relative;
  margin-left: 32px;
  margin-bottom: 64px;

  .category {
    .name {
      width: 120%;
      font-size: 18px;
      font-weight: 200;
      padding: 24px 0px 32px 32px;
      margin-left: -32px;
      margin-bottom: 6px;

      position: sticky;
      top: -40px;
      // background-color: var(--bg-color);
      backdrop-filter: blur(10px);
      // border-bottom: 1px inset;
      // margin-bottom: 12px;
    }

    .list {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-gap: 24px 24px;
      margin-bottom: 32px;

      .item {
        max-width: 420px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 6px 12px;
        border-radius: 4px;
        box-shadow: 0 3px 9px 0 rgb(0 0 0 / 10%);
        color: var(--vp-c-text-1);
        transition: all 0.1s;
        text-decoration: none;

        .title {
          .ellipsis(3);
          margin-right: 12px;
          line-height: 1.3;
          font-size: 13px;
          flex: 1;
        }

        .image {
          height: 48px;
          width: 48px;
          border-radius: 4px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          overflow: hidden;
        }

        &:hover {
          font-weight: bold;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .CCollection {
    margin-left: 0px;

    .category {
      .list {
        grid-template-columns: 48% 48%;
      }
    }
  }
}

@media (max-width: 414px) {
  .CCollection {
    .category {
      .list {
        grid-template-columns: 100%;
      }
    }
  }
}

.dark {
  .CCollection .category .list .item {
    box-shadow: 0 3px 9px 0 rgb(0 0 0 / 70%);
  }
}
</style>
