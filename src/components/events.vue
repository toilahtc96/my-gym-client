<template>
  <!-- Start Events -->
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
                  <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00 pm
                </li>
                <li><i class="flaticon-placeholder"></i>New York City</li>
              </ul>
              <div class="event-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et...
                </p>
              </div>
              <router-link class="event-more" to="/event-details" target="_blank"> Continue Reading </router-link>
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
                  <i class="flaticon-clock-circular-outline"></i>8:00 am 3:00 pm
                </li>
                <li><i class="flaticon-placeholder"></i>New York City</li>
              </ul>
              <div class="event-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et...
                </p>
              </div>
              <router-link class="event-more" to="/event-details" target="_blank"> Continue Reading </router-link>
              <div class="event-date"><span>20</span> Feb</div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-btn text-center">
        <router-link to="/events" target="_blank" class="main-btn"><span>All Events</span></router-link>
      </div>
    </div>
  </section>
  <!--  End Events  -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>