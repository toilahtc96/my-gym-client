<template>
  <!-- Start Header V2 -->
  <section class="home demo2" id="home">
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.7"
      linesColor="#ffffff"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="header-content container">
      <div class="row">
        <div class="col-md-6">
          <div class="home-content">
            <div>
              <h5
                class="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                Welcome To Pranayama
              </h5>
              <h1
                class="wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                Join Yoga Studio
              </h1>
              <p
                class="wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="1.5s"
              >
                Yoga is the ability to focus the mind on a single point without
                distraction.
              </p>
              <div
                class="my-btn wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="2s"
              >
                <router-link to="/services" target="_blank" class="main-btn"
                  ><span>Learn More</span></router-link
                >
                <router-link
                  to="/contact-us"
                  target="_blank"
                  class="main-btn custom-btn"
                  ><span>Contact Us</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-none d-md-block">
          <div class="home-image wow fadeInUp" data-wow-duration="1.5s">
            <img src="https://via.placeholder.com/634x700" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header V2 -->
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>