import "./style/index.css";

import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/tags.vue";
import Languages from "./components/Languages.vue";
import Layout from "./components/VPLayout.vue";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("Languages", Languages);
  },
};
