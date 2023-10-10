<script setup lang="ts">
import { useData } from "vitepress";
import {
  useNormalizeLink,
  useAppearance,
  socialIcon,
  extractSocialLink,
} from "../common";

const { theme } = useData();
const { normalizeLink } = useNormalizeLink();
const { toggle } = useAppearance();
</script>

<template>
  <header class="CVPHeader">
    <div class="info">
      <div class="logo" @click="toggle" title="点击切换主题">
        <img
          width="150"
          height="150"
          alt="logo"
          loading="lazy"
          class="avatar"
          :src="theme.header.avatar"
        />
      </div>

      <div class="desc">
        <div class="title" v-html="theme.header.title" />
        <div class="position" v-html="theme.header.position" />
        <div
          class="motto"
          v-html="theme.header.motto"
          :title="theme.header.motto"
        />

        <div class="social">
          <a
            v-for="(svg, name) in socialIcon"
            :href="extractSocialLink(name, theme.header.socialLinks)"
            target="_blank"
            rel="noopener"
            class="social-item"
            v-html="svg"
            :style="{
              opacity: extractSocialLink(name, theme.header.socialLinks)
                ? 1
                : 0.1,
              cursor: extractSocialLink(name, theme.header.socialLinks)
                ? 'pointer'
                : 'not-allowed',
            }"
          />
        </div>
      </div>
    </div>

    <nav class="nav">
      <a
        class="nav-item"
        v-for="n of theme.header.nav"
        :key="n.link"
        :href="normalizeLink(n.link)"
      >
        {{ n.text }}
      </a>
    </nav>
  </header>
</template>

<style scoped lang="less">
.CVPHeader {
  background-color: #202226;
  color: #fff;
  border-right: 0.5px solid rgba(84, 84, 84, 0.48);

  width: 40%;
  padding: 36px 72px 36px 36px;

  .info {
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: right;

    .logo {
      cursor: pointer;
      width: 160px;
      height: 160px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      align-self: end;

      .avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        -webkit-user-drag: none;
      }
    }

    .desc {
      user-select: none;

      margin-top: 36px;
      margin-right: 6px;
      text-align: right;

      .title {
        font-size: 26px;
        font-weight: bold;
        font-family: "LXGW WenKai LITE";
      }

      .position {
        margin: 4px 0;
      }

      .motto {
        margin: 4px 0;
      }

      .social {
        margin-top: 12px;
        display: flex;
        justify-content: end;

        &-item {
          fill: #ffffffe2;

          width: 24px;
          height: 24px;
          margin-right: 16px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .nav {
    margin-top: 36px;
    margin-right: 8px;
    text-align: right;
    font-size: 18px;

    &-item {
      text-decoration: none;
      color: #ffffff;
      display: block;
      user-select: none;
      cursor: pointer;
      list-style: none;
      margin-bottom: 12px;

      transition: all ease-in-out 0.4s;
      opacity: 0.5;
      &:hover {
        font-weight: bolder;
        opacity: 1;
      }
    }
  }
}

@media (max-width: 900px) {
  .CVPHeader {
    width: 100%;
    min-height: 200px;
    padding: 24px 36px 12px 36px;
    border-bottom: 0.5px solid rgba(184, 181, 181, 0.48);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .info {
      margin-top: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .logo {
        // transition: all ease 0.4s;

        min-width: 120px;
        min-height: 120px;
        width: 120px;
        height: 120px;
        .avatar {
          width: 110px;
          height: 110px;
        }
      }

      .desc {
        // transition: all ease 0.4s;
        text-align: left;
        margin-left: 16px;
        margin-top: 0px;
        .title {
          margin-top: 8px;
          font-size: 20px;
        }

        .position {
          margin: 0;
        }

        .motto {
          margin: 0;

          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .social {
          margin-top: 8px;

          &-item {
            width: 20px;
            height: 20px;

            &:last-child {
              margin-right: 16px;
            }
          }

          direction: rtl;
        }
      }
    }

    .nav {
      width: 100%;
      text-align: center;

      &-item {
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 0px;
      }
    }
  }
}

@media (max-width: 680px) {
  .motto,
  .position {
    font-size: 15px;
    line-height: 15px;

    margin: 4px 0 !important;
  }
}

@media (max-width: 650px) {
  .logo {
    margin-left: 16px;
    min-width: 90px !important;
    min-height: 90px !important;
    width: 90px !important;
    height: 90px !important;
    .avatar {
      width: 84px !important;
      height: 84px !important;
    }
  }

  .desc {
    margin-left: 8px !important;
    .title {
      font-size: 18px !important;
    }
    .position {
      display: none;
    }
    .motto {
      // margin: 0 !important;
      margin-bottom: 12px !important;
      font-size: 12px;

      -webkit-line-clamp: 1 !important;
      line-clamp: 1 !important;
    }

    .social {
      &-item {
        width: 18px;
        height: 18px;
        margin-right: 12px !important;
      }
    }
  }
}
</style>
