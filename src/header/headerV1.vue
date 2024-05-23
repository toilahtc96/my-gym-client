<template>
  <!-- Start Header V1 -->
    <!-- v-for="header in headerInfors" v-bind:key="header.id" -->
  <Carousel class="home" id="home" v-if="headerInfors && headerInfors.length">
    <Slide v-for="header in headerInfors" v-bind:key="header.id" class="bg-cover"
      :style="{ 'background-image': 'url(' + header.image + ')' }" style="height: 100vh; width: 100%; background-size: cover; background-position: center;">
      <div class="overlay">
        <div class="home-content">
          <div class="text-center">
            <h5>{{ header.firstTitle }}</h5>
            <h1>{{ header.bigTitle }}</h1>
            <p>
              {{ header.moreInformation }}
            </p>
            <div class="my-btn">
              <router-link to="/services" class="main-btn" target="_blank"><span>More Information</span></router-link>
              <router-link to="/contact-us" class="main-btn custom-btn" target="_blank"><span>Contact
                  Us</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
  <!-- End Header V1 -->
</template>
<script>
import { Carousel, Slide } from 'vue3-carousel';
import axios from "@/core/httpClient";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      headerInfors: []
    };
  },
  created() {
    axios.get(`/public/header/get-three-active`).then((data) => {
      this.headerInfors = data.data;
    }).catch((err) => {
      console.log(err)
    })
  }
};
</script>
<style lang="scss" scoped>
</style>