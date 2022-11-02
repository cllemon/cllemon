import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isPureObject } from "@luckrya/utility";
import { defineConfig } from "vitepress";
import {
  linkToCardPlugin,
  LinkToCardPluginOptions,
} from "@luckrya/markdown-it-link-to-card";

const Links = {
  logo: "https://avatars.githubusercontent.com/u/47939992?s=40&u=dc595041d0cda12250b9ef4f06d07320e0af32ad&v=4",
  font: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.0.0/style.css",
  cllemon: "https://github.com/cllemon",
};

export default defineConfig({
  title: " L.C ",
  description: "“一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也！”",
  lang: "zh-CN",
  base: "/cllemon",
  head: [
    ["link", { rel: "icon", href: Links.logo }],
    ["link", { rel: "stylesheet", href: Links.font }],
    ["meta", { name: "referrer", content: "no-referrer" }],
  ],

  themeConfig: {
    outline: "deep",

    logo: Links.logo,

    socialLinks: [{ icon: "github", link: Links.cllemon }],

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
          {
            text: "👨‍💻 软件技术",
            link: "/technology/",
            // activeMatch: "^technology",
          },
          {
            text: "🐾 生活记录",
            link: "/lifelog/",
            // activeMatch: "^lifelog",
          },
        ],
      },
      { text: "摄影", link: "/photography" },
      { text: "关于", link: "/index" },
    ],

    footer: {
      copyright: `<div style='font-size:12px;font-weight:400;'><a target="_blank" style="color: #9e9e9e;border-bottom: 0.5px dashed #9e9e9e;margin-right:4px;" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a>Copyright © 2019-${new Date().getFullYear()} L.C</div>`,
      message: "一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也！",
    },
  },

  markdown: {
    config: (md) => {
      md.use<LinkToCardPluginOptions>(linkToCardPlugin, {
        size: "small",
      });
    },
  },

  vite: {
    server: {
      port: 2019,
    },
  },

  transformPageData: (pageData) => {
    const articles = {};
    const isMD = (p: string) => path.extname(p) === ".md"; // only .md
    const isDirEntry = (p: string) => path.basename(p, ".md") === "index";
    const ignoreDotVitepressDir = (p: string) => !p.includes(".vitepress");
    const resolve = (...paths: string[]) =>
      path.resolve(__dirname, "..", ...paths);
    const readdir = (_path: string) =>
      fs.readdirSync(_path, { encoding: "utf-8", withFileTypes: true });
    readdir(resolve())
      .filter((d) => d.isDirectory() && ignoreDotVitepressDir(d.name))
      .forEach((d) => {
        const timestamp = (t: string) => new Date(t).getTime();
        const extractData = (dirPath: string) => {
          return readdir(dirPath)
            .map((d) => {
              if (d.isSymbolicLink()) return;
              if (d.isDirectory()) return extractData(resolve(dirPath, d.name));
              if (isDirEntry(d.name)) return;
              if (isMD(d.name))
                return {
                  ...matter(fs.readFileSync(resolve(dirPath, d.name), "utf-8"))
                    .data,
                  href: resolve(dirPath, d.name).replace(".md", ""),
                };
            })
            .flat(10)
            .filter(isPureObject);
        };
        const data = extractData(resolve(d.name))
          .sort((a, b) => timestamp(b.date) - timestamp(a.date))
          .map((item) => ({
            ...item,
            href: path.relative(resolve(d.name), item.href),
          }));
        articles[d.name] = data;
      });

    return {
      ...pageData,
      articles,
    };
  },
});
