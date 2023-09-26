import { useData, withBase } from "vitepress";
import { ref, watch, onMounted } from "vue";

export function useNormalizeLink() {
  const { site } = useData();

  function normalizeLink(url: string) {
    if (/^[a-z]+:/i.test(url)) {
      return url;
    }

    const { pathname, search, hash } = new URL(url, "http://example.com");
    const normalizedPath =
      pathname.endsWith("/") || pathname.endsWith(".html")
        ? url
        : `${pathname.replace(
            /(\.md)?$/,
            site.value.cleanUrls === "disabled" ? ".html" : ""
          )}${search}${hash}`;

    return withBase(normalizedPath);
  }

  return {
    normalizeLink,
  };
}

export function useAppearance() {
  const { site, isDark } = useData();
  const checked = ref(false);

  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const classList = document.documentElement.classList;

  let userPreference =
    localStorage.getItem("vitepress-theme-appearance") ||
    site.value.appearance !== true
      ? site.value.appearance
      : "auto";

  let _isDark =
    userPreference === "auto" ? query.matches : userPreference === "dark";

  query.onchange = (e) => {
    if (userPreference === "auto") {
      setClass((_isDark = e.matches));
    }
  };

  function setClass(dark: boolean): void {
    const css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(
      document.createTextNode(
        `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
      )
    );
    document.head.appendChild(css);

    checked.value = dark;
    classList[dark ? "add" : "remove"]("dark");

    // @ts-expect-error keep unused declaration, used to force the browser to redraw
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }

  function toggle() {
    setClass((_isDark = !_isDark));

    userPreference = _isDark
      ? query.matches
        ? "auto"
        : "dark"
      : query.matches
      ? "light"
      : "auto";

    localStorage.setItem("vitepress-theme-appearance", userPreference);
  }

  watch(checked, (newIsDark) => {
    isDark.value = newIsDark;
  });

  onMounted(() => {
    checked.value = document.documentElement.classList.contains("dark");
  });

  return {
    toggle,
  };
}
