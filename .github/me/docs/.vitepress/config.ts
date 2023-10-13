import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isPureObject } from "@luckrya/utility";
import { defineConfig } from "vitepress";
import dayjs from "dayjs";
// import {
//   linkToCardPlugin as LocalLinkToCardPlugin,
//   LinkToCardPluginOptions,
// } from "@luckrya/markdown-it-link-to-card";

export default {
  title: " CHENG LONG ",
  lang: "zh-CN",
  base: "/cllemon/",
  head: [
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "script",
      {
        async: "",
        src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
      },
    ],
  ],
  themeConfig: {
    outline: "deep",
    header: {
      avatar: "https://avatars.githubusercontent.com/u/47939992",
      title: "CHENG LONG",
      motto: "一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也",
      position: "安徽 · 淮南",
      socialLinks: [{ icon: "github", link: "https://github.com/cllemon" }],
      nav: [
        { text: "筆墨", link: "/index" },
        { text: "歸檔", link: "/archive" },
        { text: "收藏", link: "/collection" },
        { text: "關於", link: "/about" },
      ],
    },
    footer: {
      message: "",
      copyright: `<div style='font-size:12px;font-weight:300;'><a target="_blank" style="color: #9e9e9e;border-bottom: 0.5px dashed #9e9e9e;margin-right:4px;" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a>Copyright © 2019-${new Date().getFullYear()}</div>`,
    },
  },

  markdown: {
    config: (md) => {
      // md.use<LinkToCardPluginOptions>(LocalLinkToCardPlugin, {
      //   size: "small",
      //   // tag: "\\$",
      // });
    },
  },

  vite: {
    server: {
      port: 2019,
    },
  },

  transformPageData: (pageData) => {
    // const articles = [] as any[];
    const isMD = (p: string) => path.extname(p) === ".md"; // only .md
    const isDirEntry = (p: string) => path.basename(p, ".md") === "index";
    const ignoreDotVitepressDir = (p: string) => !p.includes(".vitepress");
    const resolve = (...paths: string[]) =>
      path.resolve(__dirname, "..", ...paths);
    const readdir = (_path: string) =>
      fs.readdirSync(_path, { encoding: "utf-8", withFileTypes: true });

    const timestamp = (t: string) => new Date(t).getTime();
    const articles = readdir(resolve())
      .filter((d) => d.isDirectory() && ignoreDotVitepressDir(d.name))
      .map((d) => {
        const extractData = (dirPath: string) => {
          return readdir(dirPath)
            .map((d) => {
              if (d.isSymbolicLink() || isDirEntry(d.name)) return;
              if (d.isDirectory()) return extractData(resolve(dirPath, d.name));
              if (isMD(d.name)) {
                const { data } = matter(
                  fs.readFileSync(resolve(dirPath, d.name), "utf-8")
                );
                const time = new Date(data.date);
                return {
                  ...data,
                  href: path.relative(
                    resolve(),
                    resolve(dirPath, d.name).replace(".md", "")
                  ),
                  date: dayjs(data.date).format("YYYY年MM月DD日"),
                  time,
                };
              }
            })
            .flat(10)
            .filter(isPureObject);
        };

        return extractData(resolve(d.name));
      })
      .flat(10)
      .sort((a, b) => timestamp(b.time) - timestamp(a.time));

    const archives = articles.reduce((pre, cur) => {
      const y = dayjs(cur.time).format("YYYY");
      const info = {
        ...cur,
        time: dayjs(cur.time).format("MM-DD"),
      };

      if (pre[y]) {
        pre[y].push(info);
      } else {
        pre[y] = [info];
      }

      return pre;
    }, {});

    return {
      ...pageData,
      articles,
      archives,
    };
  },
} as ReturnType<typeof defineConfig> & Record<string, any>;
