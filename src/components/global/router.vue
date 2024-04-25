<template>
  <!--Start section navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <li>
          <a>Home <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/homepageV1.vue" tag="li">
              <a>Homepage V1</a>
            </router-link>
            <router-link to="/homepageV2.vue" tag="li">
              <a>Homepage V2</a>
            </router-link>
            <router-link to="/homepageV3.vue" tag="li">
              <a>Homepage V3</a>
            </router-link>
          </ul>
        </li>
        <li>
          <a>Pages <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/about-us.vue" tag="li">
              <a>About Us</a>
            </router-link>
            <router-link to="/services.vue" tag="li">
              <a>Services</a>
            </router-link>
            <router-link to="/pricing.vue" tag="li">
              <a>Pricing Plans</a>
            </router-link>
            <router-link to="/faq.vue" tag="li">
              <a>FAQ</a>
            </router-link>
            <router-link to="/404.vue" tag="li">
              <a>404 Page</a>
            </router-link>
          </ul>
        </li>
        <li>
          <a>Classes <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/schedule.vue" tag="li">
              <a>Class Schedule</a>
            </router-link>
            <router-link to="/class-grid.vue" tag="li">
              <a>Class Grid</a>
            </router-link>
            <router-link to="/class-details.vue" tag="li">
              <a>Single Class</a>
            </router-link>
          </ul>
        </li>
        <li>
          <a>Trainer <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/team.vue" tag="li">
              <a>Trainer List</a>
            </router-link>
            <router-link to="/team-single.vue" tag="li">
              <a>Trainer Profile</a>
            </router-link>
          </ul>
        </li>
        <li>
          <a>Events <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/events.vue" tag="li">
              <a>All Events</a>
            </router-link>
            <router-link to="/event-details.vue" tag="li">
              <a>Single Event</a>
            </router-link>
          </ul>
        </li>
        <li>
          <a>Blog <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown">
            <router-link to="/blog-2-column.vue" tag="li">
              <a>Blog 2 Column</a>
            </router-link>
            <router-link to="/blog-3-column.vue" tag="li">
              <a>Blog 3 Column</a>
            </router-link>
            <router-link to="/blog-sidebar.vue" tag="li">
              <a>Blog Sidebar</a>
            </router-link>
            <router-link to="/blog-sidebar-left-2-column.vue" tag="li">
              <a>Blog Sidebar Left 2 Column</a>
            </router-link>
            <router-link to="/blog-sidebar-right-2-column.vue" tag="li">
              <a>Blog Sidebar Right 2 Column</a>
            </router-link>
            <router-link to="/blog-single.vue" tag="li">
              <a>Blog Single</a>
            </router-link>
          </ul>
        </li>
        <router-link to="/contact-us.vue" tag="li">
          <a>Contact Us</a>
        </router-link>
      </ul>
    </div>
  </nav>
  <!--End section navbar -->
</template>

<script>
export default {
  data: function () {
    return {
      name: "router",
    };
  },
};
</script>

<style lang="scss" scoped></style>
