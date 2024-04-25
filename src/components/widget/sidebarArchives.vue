<template>
  <!-- Start Sidebar archive -->
  <div class="sidebar-archives">
    <h4>Archives</h4>
    <ul class="archives-list list-unstyled">
        <router-link to="/blog-sidebar" tag="li"><a target="_blank">January 2020</a></router-link>
        <router-link to="/blog-sidebar" tag="li"><a target="_blank">December 2019</a></router-link>
        <router-link to="/blog-sidebar" tag="li"><a target="_blank">November 2019</a></router-link>
    </ul>
  </div>
  <!-- Start Sidebar archive -->
</template>

<script>
export default {
  name: "sidebarArchives",
};
</script>

<style lang="scss" scoped></style>