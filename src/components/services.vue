<template>
  <!-- Start Services -->
  <section class="services" id="services">
    <div class="container">
      <div class="main-title text-center">
        <span class="separator">
          <i class="flaticon-chakra"></i>
        </span>
        <h2>What We Do</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="item in services" v-bind:key="item.id">
          <div :class=item.divClass>
            <div class="service-bg"><i class="flaticon-lotus"></i></div>
            <div class="service-item">
              <div class="service-icon">
                <i :class=item.icon></i>
              </div>
              <h4>{{ item.title }}</h4>
              <p>
                {{ item.information }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Services -->
</template>

<script>
import axios from "@/core/httpClient";
export default {
  data() {
    return {
      services: [],

    }
  },
  created() {
    axios.get(`/public/service/get-six-active`).then((data) => {
      this.services = data.data;
      for (var i = 0; i < this.services.length; i++) {
        if (i == 1) {
          this.services[i].divClass = "service two"
        } else {
          this.services[i].divClass = "service one"
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