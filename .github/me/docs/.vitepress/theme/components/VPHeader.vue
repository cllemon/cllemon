<template>
  <header class="CVPHeader">
    <div class="logo">
      <img
        src="https://avatars.githubusercontent.com/u/47939992"
        class="avatar"
        width="150"
        height="150"
        alt="logo"
        loading="lazy"
      />
    </div>

    <div class="desc">
      <div class="title"></div>
      <div class="desc"></div>
    </div>

    <nav>
      <div>ARCHIVIST</div>
      <div>
        TIMELINE
        <!-- Record in the dimension of time, collected web bookmarks, interesting projects, published articles, moments of inspiration -->
      </div>
      <div>TAGS</div>
    </nav>
  </header>
</template>

<style scoped lang="less">
.CVPHeader {
  color: #fff;
}

.logo {
  overflow: hidden;
  width: 160px;
  height: 160px;
  background-color: #fff;

  border-radius: 50%;
  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
</style>
