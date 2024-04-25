<template>
  <!-- Start Sidebar search -->
  <div class="sidebar-search">
    <form action="#" method="post">
      <div class="form-group">
        <input
          type="search"
          class="form-control"
          name="search-field"
          placeholder="Search.."
          required
        />
        <button class="search-btn" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </form>
  </div>
  <!-- End Sidebar search -->
</template>

<script>
export default {
  name: "sidebarSearch",
};
</script>

<style lang="scss" scoped></style>