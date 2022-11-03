<template>
  <div class="languages">
    <code class="language" v-for="language of languages" :key="language.label">
      <img class="logo" :src="language.value" />
    </code>
  </div>
</template>

<script setup lang="ts">
const languages = [
  {
    label: "javascript",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
  },
  {
    label: "typescript",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png",
  },
  {
    label: "",
    value:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
  },
];
</script>
<style scoped>
.languages {
  display: flex;
}
.languages .language {
  margin-right: 4px;
}
.languages .language .logo {
  height: 20px;
  box-shadow: none !important;
}
</style>
