<template>
  <div :class="{ 'scroll-fixed-navbar': isScrolled }">
    <div>
      <!-- Start Navbar -->
      <div class="header-inner">
        <div class="container">
          <div class="row">
            <b-navbar toggleable="lg" type="light">
              <b-navbar-brand class="my-logo" to="/index-1"><i class="flaticon-chakra"></i>Pranayama</b-navbar-brand>
              <b-navbar-toggle target="nav-collapse">
                <div class="menu-toggle">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <div class="main-menu ml-auto">
                  <b-navbar-nav>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Home <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/index-1"
                        >Homepage V1</b-dropdown-item
                      >
                      <b-dropdown-item to="/index-2"
                        >Homepage V2</b-dropdown-item
                      >
                      <b-dropdown-item to="/index-3"
                        >Homepage V3</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Pages <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/about-us"
                        >About Us</b-dropdown-item
                      >
                      <b-dropdown-item to="/services"
                        >Services</b-dropdown-item
                      >
                      <b-dropdown-item to="/pricing"
                        >Pricing Plans</b-dropdown-item
                      >
                      <b-dropdown-item to="/faq">FAQ</b-dropdown-item>
                      <b-dropdown-item to="/404">404 Page</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Classes <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/schedule"
                        >Class Schedule</b-dropdown-item
                      >
                      <b-dropdown-item to="/class-grid"
                        >Class Grid</b-dropdown-item
                      >
                      <b-dropdown-item to="/class-details"
                        >Single Class</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Trainer <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/team"
                        >Trainer List</b-dropdown-item
                      >
                      <b-dropdown-item to="/team-single"
                        >Trainer Profile</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Events <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/events"
                        >All Events</b-dropdown-item
                      >
                      <b-dropdown-item to="/event-details"
                        >Single Event</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item-dropdown>
                      <template #button-content>
                        <em>Blog <i class="fa fa-angle-down"></i></em>
                      </template>
                      <b-dropdown-item to="/blog-2-column"
                        >Blog 2 Column</b-dropdown-item
                      >
                      <b-dropdown-item to="/blog-3-column"
                        >Blog 3 Column</b-dropdown-item
                      >
                      <b-dropdown-item to="/blog-sidebar"
                        >Blog Sidebar</b-dropdown-item
                      >
                      <b-dropdown-item to="/blog-sidebar-left-2-column"
                        >Blog Sidebar Left 2 Column</b-dropdown-item
                      >
                      <b-dropdown-item to="/blog-sidebar-right-2-column"
                        >Blog Sidebar Right 2 Column</b-dropdown-item
                      >
                      <b-dropdown-item to="/blog-single"
                        >Blog Single</b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                    <!-- list -->
                    <b-nav-item to="/contact-us">contact Us</b-nav-item>
                    <!-- list -->
                  </b-navbar-nav>
                  <ul class="nav-search">
                    <li
                      class="search-btn"
                      v-on:click="formOpen = !formOpen"
                      v-bind:class="{ active: formOpen }"
                    >
                      <span class="fa fa-search"></span>
                    </li>
                    <li
                      class="bar-icon sidemenu__btn"
                      v-on:click="navOpen = !navOpen"
                      v-bind:class="{ active: navOpen }"
                    >
                      <span class="fa fa-list-ul"></span>
                    </li>
                  </ul>
                  <form class="search-form" v-show="formOpen">
                    <input
                      type="search"
                      placeholder="Search Now"
                      name="search"
                    />
                    <button type="submit" class="search-btn">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </form>
                  <!-- <router /> -->
                </div>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
      <!-- End Navbar -->

      <!--  Start Side Menu -->
      <div id="sidemenu">
        <transition name="translateX">
          <nav v-show="navOpen">
            <div class="sidemenu__wrapper side-menu text-center">
              <span
                class="side-menu-close bar-icon sidemenu__btn"
                v-on:click="navOpen = !navOpen"
                v-bind:class="{ active: navOpen }"
              >
                <i class="fas fa-times"></i>
              </span>
              <router-link class="my-logo" to="/index-1"><i class="flaticon-chakra"></i>Pranayama</router-link>
              <ul class="side-nav list-unstyled">
                <li><a href="#upper-bar" v-smooth-scroll="{}">Home</a></li>
                <li><a href="#services" v-smooth-scroll="{}">Services</a></li>
                <li><a href="#class-schedule" v-smooth-scroll="{}">Schedule</a></li>
                <li><a href="#events" v-smooth-scroll="{}">Events</a></li>
                <li><a href="#pricing" v-smooth-scroll="{}">Pricing</a></li>
                <li><a href="#contact" v-smooth-scroll="{}">Contact Us</a></li>
              </ul>
              <div class="side-info">
                <h4>About Pranayama</h4>
                <p>
                  Our Yoga studio has become one of the most popular yoga venues
                  in USA. It is time to discover your passion.
                </p>
              </div>
              <ul class="social-icons list-unstyled">
                <li>
                  <a href="https://www.facebook.com/envato" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/envato" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/envato/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://themeforest.net/" target="_blank">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="https://themeforest.net/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </transition>
      </div>
      <!--  End Side Menu -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      navOpen: false,
      formOpen: false,
    };
  },
 
};
</script>

<style lang="scss" scoped></style>