<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <i class="flaticon-lotus"></i>
        <div class="row">
          <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div class="contact-boxes">
              <div class="row">
                <div class="col-md-4">
                  <div class="contact-box">
                    <div class="icon-box">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="content-box">
                      <h5>Phone Number</h5>
                      <p>+1 212 118-2110</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-box two">
                    <i class="flaticon-lotus"></i>
                    <div class="icon-box">
                      <i class="far fa-envelope"></i>
                    </div>
                    <div class="content-box">
                      <h5>Email Address</h5>
                      <p>info@pranayama.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-box">
                    <div class="icon-box">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="content-box">
                      <h5>Adress</h5>
                      <p>NewYork, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <form class="contact-form">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  required
                  value=""
                />
                <label for="name">Name</label>
                <span class="input-border"></span>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                  value=""
                />
                <label for="email">Email</label>
                <span class="input-border"></span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  name="subject"
                  required
                  value=""
                  onkeyup="this.setAttribute('value', this.value);"
                />
                <label for="subject">Subject</label>
                <span class="input-border"></span>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  required
                  data-value=""
                  onkeyup="this.setAttribute('data-value', this.value);"
                ></textarea>
                <label for="message">Your Message</label>
                <span class="input-border"></span>
              </div>
              <!-- Button Send Message  -->
              <button class="contact-btn main-btn" type="submit" name="send">
                <span>Send Message</span>
              </button>
              <!-- Form Message  -->
              <div class="form-message text-center"><span></span></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact -->

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
      heading: "Contact US",
      sousHeading: "Contact US",
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