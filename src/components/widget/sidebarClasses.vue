<template>
  <!-- Start Sidebar classes -->
  <div class="sidebar-classes">
    <h4>Related Class</h4>
    <div class="class-inner">
      <div class="class-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="class-info">
        <h5><router-link to="/class-details" target="_blank">Increased body awareness</router-link></h5>
        <p>By: Elina Ekman</p>
      </div>
    </div>
    <div class="class-inner">
      <div class="class-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="class-info">
        <h5><router-link to="/class-details" target="_blank">Yoga Classes for Children</router-link></h5>
        <p>By: Razan Smith</p>
      </div>
    </div>
    <div class="class-inner">
      <div class="class-image">
        <img class="img-fluid" src="https://via.placeholder.com/800x560" alt />
      </div>
      <div class="class-info">
        <h5><router-link to="/class-details" target="_blank">Increased body awareness</router-link></h5>
        <p>By: Lily Garner</p>
      </div>
    </div>
  </div>
  <!-- End Sidebar classes -->
</template>

<script>
export default {
  name: "sidebarClasses",
};
</script>

<style lang="scss" scoped></style>