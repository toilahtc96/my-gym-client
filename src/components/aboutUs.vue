<template>
  <!-- Start About Us -->
  <section class="about-us" id="about-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 info">
          <div class="about-info">
            <h3>Welcome To Pranayama Studio</h3>
            <h4>You can always control what goes on inside</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              sed do eiusm tempor incididunt ut labore et dolore magna.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="about-progress">
              <div class="progress-container">
                <span class="percent" style="left: calc(90% - 21px);">90%</span>
                <h4>Metabolism</h4>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div class="progress-container">
                <span class="percent" style="left: calc(85% - 21px);">85%</span>
                <h4>Flexibility</h4>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div class="progress-container">
                <span class="percent" style="left: calc(70% - 21px);">70%</span>
                <h4>Breathing</h4>
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
            <img class="img-fluid" src="https://via.placeholder.com/700x666" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us -->
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>