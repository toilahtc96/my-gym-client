<template>
  <div class="wrraper">
    <!-- Import components -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Class Grid -->
    <section class="classes">
      <div class="container">
        <div class="main-title text-center">
          <span class="separator">
            <i class="flaticon-chakra"></i>
          </span>
          <h2>Explore our classes</h2>
        </div>
        <div class="row">
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Yoga For Beginners</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Mon, Tue</li>
                  <li><i class="far fa-clock"></i>10:00 - 11:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Jack Hakman</li>
                  <li class="pull-right">
                    <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Balance Body &amp; Mind</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Mon, Tue, Thu</li>
                  <li><i class="far fa-clock"></i>9:00 - 10:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Elina Ekman</li>
                  <li class="pull-right">
                    <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Yoga Classes for Children</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Wed, Thu</li>
                  <li><i class="far fa-clock"></i>12:00 - 13:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Razan Smith</li>
                  <li class="pull-right">
                   <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Increased body awareness</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Mon, Wed, Sun</li>
                  <li><i class="far fa-clock"></i>11:00 - 12:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Lily Garner</li>
                  <li class="pull-right">
                   <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Hatha Yoga</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Tue, Wed, Fri</li>
                  <li><i class="far fa-clock"></i>9:00 - 10:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Jack Hakman</li>
                  <li class="pull-right">
                    <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- New Item -->
          <div class="col-lg-4 col-md-6">
            <div class="class">
              <div class="class-img">
                <img
                  src="https://via.placeholder.com/800x560"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="class-content">
                <div class="class-title">
                  <router-link to="/class-details" target="_blank">
                    <h4>Pilates Yoga</h4>
                  </router-link>
                </div>
                <ul class="details list-unstyled">
                  <li><i class="far fa-calendar"></i>Fri, Sat</li>
                  <li><i class="far fa-clock"></i>10:00 - 11:00</li>
                </ul>
                <div class="class-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <ul class="class-info list-unstyled">
                  <li class="pull-left">Peter Doe</li>
                  <li class="pull-right">
                     <router-link to="/class-details" target="_blank" class="post-more"
                      >Read more<i class="fa fa-angle-double-right"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Class Grid -->

    <!-- Import components -->
    <app-newsLetter :class="'area'"></app-newsLetter>
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
      heading: "Classes",
      sousHeading: "Classes",
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