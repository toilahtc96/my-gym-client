<template>
  <!-- start section sidebar categories -->
  <div class="sidebar-categories">
    <h4>Categories</h4>
    <ul class="categories-list list-unstyled">
      <li>
        <router-link to="/blog-single" target="_blank">Yoga &amp; Meditation <span>10</span></router-link>
      </li>
      <li>
        <router-link  to="/blog-single" target="_blank">Training <span>05</span></router-link>
      </li>
      <li>
        <router-link to="/blog-single" target="_blank">Fitness Workout <span>07</span></router-link>
      </li>
      <li>
        <router-link to="/blog-single" target="_blank">Challenge <span>08</span></router-link>
      </li>
      <li>
        <router-link to="/blog-single" target="_blank">Yoga Tutorials <span>09</span></router-link>
      </li>
    </ul>
  </div>
  <!-- End section sidebar categories -->
</template>

<script>
export default {
  name: "categories",
};
</script>

<style lang="scss" scoped></style>
