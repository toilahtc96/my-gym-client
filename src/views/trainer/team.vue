<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Our Team -->
    <section class="team" id="team">
      <div class="container">
        <div class="main-title text-center">
          <span class="separator">
            <i class="flaticon-chakra"></i>
          </span>
          <h2>Our Awesome Team</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="member">
              <div class="member-img">
                <img
                  src="https://via.placeholder.com/359x400"
                  class="img-fluid"
                  alt=""
                />
                <div class="overlay">
                  <div class="social-media text-center">
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div class="member-info">
                <h4 class="member-name">Razan Smith</h4>
                <span>Yoga Teacher</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="member">
              <div class="member-img">
                <img
                  src="https://via.placeholder.com/359x400"
                  class="img-fluid"
                  alt=""
                />
                <div class="overlay">
                  <div class="social-media text-center">
                     <a href="https://themeforest.net/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div class="member-info">
                <h4 class="member-name">Elina Ekman</h4>
                <span>Yoga Teacher</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="member">
              <div class="member-img">
                <img
                  src="https://via.placeholder.com/359x400"
                  class="img-fluid"
                  alt=""
                />
                <div class="overlay">
                  <div class="social-media text-center">
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div class="member-info">
                <h4 class="member-name">Peter Doe</h4>
                <span>Yoga Teacher</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="member">
              <div class="member-img">
                <img
                  src="https://via.placeholder.com/359x400"
                  class="img-fluid"
                  alt=""
                />
                <div class="overlay">
                  <div class="social-media text-center">
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://themeforest.net/" target="_blank"><i class="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div class="member-info">
                <h4 class="member-name">Lily Garner</h4>
                <span>Yoga Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Our Team -->

    <!-- Import components NewsLetter -->
    <app-newsLetter></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";

export default {
  data: function () {
    return {
      heading: "Our Team",
      sousHeading: "Team",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>
