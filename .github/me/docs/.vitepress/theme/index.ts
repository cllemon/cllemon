import DefaultTheme from "vitepress/theme";
import "./custom.css";

// https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    // app.component("MyGlobalComponent" /* ... */);
  },
};
