import { defineConfig } from "vitepress";

export default defineConfig({
  title: " L.C ",
  description: "“一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也！”",
  lang: "zh-CN",
  base: "/cllemon",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://avatars.githubusercontent.com/u/47939992?s=40&u=dc595041d0cda12250b9ef4f06d07320e0af32ad&v=4",
      },
    ],
  ],

  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/47939992?s=40&u=dc595041d0cda12250b9ef4f06d07320e0af32ad&v=4",

    socialLinks: [{ icon: "github", link: "https://github.com/cllemon" }],

    nav: [
      {
        text: "收藏",
        items: [
          { text: "🔖 书签", link: "/bookmark" },
          { text: "🎗 项目", link: "/repositories" },
        ],
      },
      {
        text: "文档",
        items: [
          { text: "👨‍💻 软件技术", link: "/technology/" },
          { text: "🐾 生活记录", link: "/lifelog/" },
        ],
      },
      { text: "摄影", link: "/photography" },
      { text: "关于", link: "/" },
    ],

    footer: {
      copyright: `Copyright © 2019-${new Date().getFullYear()} L.C`,
      message: "一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也！",
    },
  },

  markdown: {
    config: (md) => {
      // md.use((md) => {});
    },
  },

  vite: {
    server: {
      port: 2019,
    },
  },
});
