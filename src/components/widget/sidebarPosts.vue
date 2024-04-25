<template>
  <!-- Start Sidebar posts -->
  <div class="sidebar-posts">
    <h4>Latest Post</h4>
    <div class="post-inner">
      <div class="post-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="post-info">
        <h5><router-link to="/blog-single" target="_blank">Relax Your Body</router-link></h5>
        <p>22 Jan, 2020</p>
      </div>
    </div>
    <div class="post-inner">
      <div class="post-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="post-info">
        <h5><router-link to="/blog-single" target="_blank">Yoga For Children</router-link></h5>
        <p>22 Jan, 2020</p>
      </div>
    </div>
    <div class="post-inner">
      <div class="post-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="post-info">
        <h5><router-link to="/blog-single" target="_blank">Become a Yoga trainer</router-link></h5>
        <p>22 Jan, 2020</p>
      </div>
    </div>
  </div>
  <!-- End Sidebar posts -->
</template>

<script>
export default {
  name: "sidebarPosts",
};
</script>

<style lang="scss" scoped></style>