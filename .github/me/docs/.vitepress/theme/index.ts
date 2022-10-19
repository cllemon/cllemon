import "./custom.css";
import DefaultTheme from "vitepress/theme";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("MyGlobalComponent" /* ... */);
  },
};
