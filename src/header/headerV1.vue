<template>
  <!-- Start Header V1 -->
  <carousel class="home" id="home" :items="1" v-if="headerInfors && headerInfors.length">
    <!-- v-for="header in headerInfors" v-bind:key="header.id" -->
    <div v-for="header in headerInfors" v-bind:key="header.id" class="bg-cover"
      :style="{ 'background-image': 'url(' + header.image + ')' }">
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
    </div>

  </carousel>
  <!-- End Header V1 -->
</template>

<script>
import carousel from "vue-owl-carousel";
import axios from "@/core/httpClient";
// import { message } from "ant-design-vue";
// import { HeaderService } from '@/services/header'; // Assuming your service file is named header.js and is located in the services folder
export default {

  components: { carousel },
  data() {
    return {
      headerInfors: []
    };
  },
  created() {
    // Instantiate MainInformationService
    axios.get(`/public/header/get-three-active`).then((data) => {
      this.headerInfors = data.data;
    }).catch((err) => {
      // message.error("Has error when get header data!" ,err);
      console.log(err)
    })
  }
};
</script>

<style lang="scss" scoped></style>