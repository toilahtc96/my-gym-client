<template>
  <!-- Start Sidebar tags -->
  <div class="sidebar-tags">
    <h4>Tags</h4>
    <ul class="tags-list list-unstyled">

        <router-link to="/events" tag="li"><a target="_blank"> basic yoga</a></router-link>

        <router-link to="/events" tag="li"><a target="_blank">meditation</a> </router-link>

        <router-link to="/events" tag="li"><a target="_blank">workshop</a> </router-link>

        <router-link to="/events" tag="li"><a target="_blank">fitness</a></router-link>

        <router-link to="/events" tag="li"><a target="_blank">yoga tutorials</a></router-link>
    
    </ul>
  </div>
  <!-- End Sidebar tags -->
</template>

<script>
export default {
  name: "sidebarTags",
};
</script>

<style lang="scss" scoped></style>