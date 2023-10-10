import "./style/index.css";

import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/tags.vue";
import Languages from "./components/Languages.vue";
import Layout from "./components/VPLayout.vue";
import NotFound from "./components/NotFound.vue";
import CPenAndInk from "./components/CPenAndInk.vue";
import CArchive from "./components/CArchive.vue";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component("CPenAndInk", CPenAndInk);
    app.component("CArchive", CArchive);

    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("Languages", Languages);
  },
};
