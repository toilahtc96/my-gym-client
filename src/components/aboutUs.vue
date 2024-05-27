<template>
  <!-- Start About Us -->
  <section class="about-us" id="about-us" v-if="aboutUs">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 info">
          <div class="about-info">
            <h3>{{ this.aboutUs.smallTitle }}</h3>
            <h4>{{ this.aboutUs.mainTitle }}</h4>
            <div v-html="this.aboutUs.information"></div>
            <div class="about-progress" v-if="this.aboutUs.benefitPercentInfoArray">
              <div class="progress-container" v-for="benefit in this.aboutUs.benefitPercentInfoArray"
                v-bind:key="benefit.id">
                <span class="percent" :style="benefit.percentStyle">{{ benefit.percent }}</span>
                <h4>{{ benefit.name }}</h4>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
            </div>
            <router-link to="/about-us" target="_blank" class="main-btn"><span>Read More</span></router-link>
          </div>
        </div>
        <div class="col-lg-6 image">
          <div class="about-image">
            <div class="about-bg"><i class="flaticon-lotus"></i></div>
            <img class="img-fluid" :src="this.aboutUs.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us -->
</template>

<script>

import axios from "@/core/httpClient";
export default {
  data() {
    return {
      aboutUs: null,

    }
  },
  created() {
    axios.get(`/public/about-us/get-first-active`).then((data) => {
      this.aboutUs = data.data;
      if (this.aboutUs.benefitPercentInfo) {
        // const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
        this.aboutUs.benefitPercentInfoArray = JSON.parse(this.aboutUs.benefitPercentInfo);
        for (var i=0;i< this.aboutUs.benefitPercentInfoArray.length; i++) {
          // left: calc(90% - 21px);
          this.aboutUs.benefitPercentInfoArray[i].percentStyle = "left: calc(" + this.aboutUs.benefitPercentInfoArray[i].percent + "% - 21px);"
        }
      }
    }).catch((err) => {
      // message.error("Has error when get header data!" ,err);
      console.log(err)
    })
  }
};
</script>

<style lang="scss" scoped></style>