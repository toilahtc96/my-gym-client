<template>
  <!-- Start Sidebar info -->
  <div>
    <div class="sidebar-info">
      <h4>{{ titleWidget }}</h4>
      <ul class="info-list list-unstyled">
        <li><span>Trainer: </span>{{ dataList1 }}</li>
        <li><span>Days: </span>{{ dataList2 }}</li>
        <li><span>Time: </span>{{ dataList3 }}</li>
        <li><span>Location: </span>{{ dataList4 }}</li>
      </ul>
    </div>
    <router-link class="register main-btn" to="/contact-us" target="_blank"><span>Register Now</span></router-link>
  </div>
  <!-- End Sidebar info -->
</template>

<script>
export default {
  name: "sidebarInfo",
  props: ["titleWidget", "dataList1", "dataList2", "dataList3", "dataList4"],
};
</script>

<style lang="scss" scoped></style>