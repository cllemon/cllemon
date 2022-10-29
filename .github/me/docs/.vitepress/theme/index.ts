import "./custom.css";
import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/tags.vue";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  },
};
