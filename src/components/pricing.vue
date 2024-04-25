<template>
  <!-- Start Pricing -->
  <section class="pricing" id="pricing">
    <div class="container">
      <div class="main-title text-center">
        <span class="separator">
          <i class="flaticon-chakra"></i>
        </span>
        <h2>Our Pricing</h2>
      </div>
      <div class="pricing-plans">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="pricing-plan">
              <div class="pricing-head">
                <div class="pricing-title">
                  <h2>Basic Plan</h2>
                </div>
                <div class="pricing-price">
                  <p>
                    <span class="up">$</span> <span class="price">50</span>
                    <span class="down">/Mo</span>
                  </p>
                </div>
              </div>
              <ul class="pricing-features list-unstyled">
                <li>Starter Pack Included</li>
                <li>Personal Trainer</li>
                <li>Special Class</li>
                <li>Free Tutorials</li>
                <li>Group Training</li>
              </ul>
              <div class="pricing-btn">
                <router-link to="/pricing" target="_blank" class="main-btn custom-btn"><span>Buy Now</span></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="pricing-plan two">
              <div class="pricing-head">
                <i class="flaticon-lotus"></i>
                <div class="pricing-title">
                  <h2>Standard Plan</h2>
                </div>
                <div class="pricing-price">
                  <p>
                    <span class="up">$</span> <span class="price">100</span>
                    <span class="down">/Mo</span>
                  </p>
                </div>
              </div>
              <ul class="pricing-features list-unstyled">
                <li>Starter Pack Included</li>
                <li>Personal Trainer</li>
                <li>Special Class</li>
                <li>Free Tutorials</li>
                <li>Group Training</li>
              </ul>
              <div class="pricing-btn">
                <router-link to="/pricing" target="_blank" class="main-btn custom-btn"><span>Buy Now</span></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-3">
            <div class="pricing-plan">
              <div class="pricing-head">
                <div class="pricing-title">
                  <h2>Premium Plan</h2>
                </div>
                <div class="pricing-price">
                  <p>
                    <span class="up">$</span> <span class="price">170</span>
                    <span class="down">/Mo</span>
                  </p>
                </div>
              </div>
              <ul class="pricing-features list-unstyled">
                <li>Starter Pack Included</li>
                <li>Personal Trainer</li>
                <li>Special Class</li>
                <li>Free Tutorials</li>
                <li>Group Training</li>
              </ul>
              <div class="pricing-btn">
               <router-link to="/pricing" target="_blank" class="main-btn custom-btn"><span>Buy Now</span></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Pricing -->
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>