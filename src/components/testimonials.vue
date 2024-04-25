<template>
  <!-- Start Testimonials -->
  <section id="testimonials" class="testimonials">
    <div class="container">
      <i class="flaticon-lotus"></i>
      <carousel :items="1">
        <!-- New Item -->
        <div class="testimonial-box">
          <div class="client-info">
            <div class="client-pic">
              <img src="https://via.placeholder.com/100x100" alt="client" />
            </div>
            <div class="client-details">
              <h6>Elina Demir</h6>
            </div>
          </div>
          <div class="description">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut."
            </p>
            <div class="star">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
        <!-- New Item -->
        <div class="testimonial-box">
          <div class="client-info">
            <div class="client-pic">
              <img src="https://via.placeholder.com/100x100" alt="client" />
            </div>
            <div class="client-details">
              <h6>Alexander Smith</h6>
            </div>
          </div>
          <div class="description">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut."
            </p>
            <div class="star">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
        <!-- New Item -->
        <div class="testimonial-box">
          <div class="client-info">
            <div class="client-pic">
              <img src="https://via.placeholder.com/100x100" alt="client" />
            </div>
            <div class="client-details">
              <h6>Silvia Hatmun</h6>
            </div>
          </div>
          <div class="description">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut."
            </p>
            <div class="star">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
        <!-- New Item -->
        <div class="testimonial-box">
          <div class="client-info">
            <div class="client-pic">
              <img src="https://via.placeholder.com/100x100" alt="client" />
            </div>
            <div class="client-details">
              <h6>Egy Paulian</h6>
            </div>
          </div>
          <div class="description">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut."
            </p>
            <div class="star">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </section>
  <!-- End Testimonials -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
};
</script>

<style lang="scss" scoped></style>