<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- ========== Start Events ========== -->
    <section class="events" id="events">
      <div class="container">
        <div class="main-title text-center">
          <span class="separator">
            <i class="flaticon-chakra"></i>
          </span>
          <h2>Upcoming Events</h2>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Yoga For Healthy Living</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                <router-link class="event-more" to="/event-details" target="_blank">Continue Reading</router-link>
                <div class="event-date"><span>18</span> Feb</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Hatha Yoga Training Festival</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
               <router-link class="event-more" to="/event-details" target="_blank"
                >Continue Reading</router-link
              >
                <div class="event-date"><span>20</span> Feb</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Origins of Meditation</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                   <router-link class="event-more" to="/event-details" target="_blank">Continue Reading</router-link>
                <div class="event-date"><span>22</span> Feb</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Meditation Workshop</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                   <router-link class="event-more" to="/event-details" target="_blank">Continue Reading</router-link>
                <div class="event-date"><span>24</span> Feb</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Yoga Fitness Experience</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                   <router-link class="event-more" to="/event-details" target="_blank">Continue Reading</router-link>
                <div class="event-date"><span>26</span> Feb</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="event">
              <div class="event-img">
                <img src="https://via.placeholder.com/800x560" alt="" />
              </div>
              <div class="event-content">
                <div class="event-title">
                  <router-link to="/event-details" target="_blank">
                    <h4>Yoga Dance Event</h4>
                  </router-link>
                </div>
                <ul class="event-info list-unstyled">
                  <li class="time">
                    <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00
                    pm
                  </li>
                  <li><i class="flaticon-placeholder"></i>New York City</li>
                </ul>
                <div class="event-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et...
                  </p>
                </div>
                   <router-link class="event-more" to="/event-details" target="_blank">Continue Reading</router-link>
                <div class="event-date"><span>28</span> Feb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Events-->

    <!-- Import components NewsLetter -->
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
      heading: "Our Events",
      sousHeading: "Events",
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