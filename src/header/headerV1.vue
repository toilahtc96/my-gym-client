<template>
  <!-- Start Header V1 -->
  <carousel class="home" id="home" :items="1">
    <div
      class="bg-cover"
      style="
    background-image: url('https://via.placeholder.com/1920x1280');
      "
    >
      <div class="overlay">
        <div class="home-content">
          <div class="text-center">
            <h5>Welcome To Pranayama</h5>
            <h1>Join Yoga Studio</h1>
            <p>
              Yoga is the ability to focus the mind on a single point without
              distraction.
            </p>
            <div class="my-btn">
              <router-link to="/services" class="main-btn" target="_blank"
                ><span>Learn More</span></router-link
              >
              <router-link
                to="/contact-us"
                class="main-btn custom-btn"
                target="_blank"
                ><span>Contact Us</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- New Item -->
    <div
      class="bg-cover"
      style="
        background-image: url('https://via.placeholder.com/1920x1280');
      "
    >
      <div class="overlay">
        <div class="home-content">
          <div class="text-center">
            <h5>Welcome To Pranayama</h5>
            <h1>Join Yoga Studio</h1>
            <p>yoga doesn't take time it gives time.</p>
            <div class="my-btn">
              <router-link to="/services" class="main-btn" target="_blank"
                ><span>Learn More</span></router-link
              >
              <router-link
                to="/contact-us"
                class="main-btn custom-btn"
                target="_blank"
                ><span>Contact Us</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- New Item -->
    <div
      class="bg-cover"
      style="
        background-image: url('https://via.placeholder.com/1920x1280');
      "
    >
      <div class="overlay">
        <div class="home-content">
          <div class="text-center">
            <h5>Welcome To Pranayama</h5>
            <h1>Join Yoga Studio</h1>
            <p>Yoga is the Art of Intelligent Movement.</p>
            <div class="my-btn">
              <router-link to="/services" class="main-btn" target="_blank"
                ><span>Learn More</span></router-link
              >
              <router-link
                to="/contact-us"
                class="main-btn custom-btn"
                target="_blank"
                ><span>Contact Us</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </carousel>
  <!-- End Header V1 -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
};
</script>

<style lang="scss" scoped></style>