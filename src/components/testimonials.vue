<template>
  <!-- Start Testimonials -->
  <section id="testimonials" class="testimonials">
    <div class="container">
      <i class="flaticon-lotus"></i>

      <Carousel>
        <Slide :key="1">
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
        </Slide>
        <Slide :key="2">
          <div class="testimonial-box">
            <div class="client-info">
              <div class="client-pic">
                <img src="https://via.placeholder.com/100x100" alt="client" />
              </div>
              <div class="client-details">
                <h6>Cong HT</h6>
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
        </Slide>
      </Carousel>
    </div>
  </section>
  <!-- End Testimonials -->
</template>

<script setup>
import { Carousel,  Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref, onMounted } from 'vue';

const items = ref(1);
const slidesLoaded = ref(false);

onMounted(() => {
  slidesLoaded.value = true;
});
</script>

<style lang="scss" scoped></style>