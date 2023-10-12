import "./style/index.css";

import DefaultTheme from "vitepress/theme";
import Languages from "./components/Languages.vue";
import Layout from "./components/VPLayout.vue";
import NotFound from "./components/NotFound.vue";
import CPenAndInk from "./components/CPenAndInk.vue";
import CArchive from "./components/CArchive.vue";
import CCollection from "./components/CCollection.vue";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component("CPenAndInk", CPenAndInk);
    app.component("CArchive", CArchive);
    app.component("CCollection", CCollection);
    app.component("Languages", Languages);
  },
};
