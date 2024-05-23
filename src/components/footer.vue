<template>
  <!-- Start Footer-->
  <footer class="footer">
    <div class="footer-top">
      <i class="flaticon-lotus"></i>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12 footer-menu">
            <div class="footer-logo">
              <router-link class="my-logo" to="/index-1">
                <i class="flaticon-chakra"></i>
                Pranayama
              </router-link>
            </div>
            <ul class="list-unstyled">
              <li>NewYork, USA</li>
              <li>info@pranayama.com</li>
              <li>+1 212 118-2110</li>
            </ul>
            <ul class="list-unstyled social-media">
              <li>
                <a href="https://www.facebook.com/envato" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/envato" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/envato/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/" target="_blank">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 footer-menu">
            <div class="footer-item">
              <h4>Company</h4>
              <ul class="list-unstyled">
                <router-link to="/index-1" ><a target="_blank">Home</a></router-link> <br/>
                <router-link to="/about-us" ><a target="_blank">About us</a></router-link> <br/>
                <router-link to="/services" ><a target="_blank">Services</a></router-link> <br/>
                <router-link to="/team" ><a target="_blank">Our Team</a></router-link>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 footer-menu">
            <div class="footer-item">
              <h4>Menu</h4>
              <ul class="list-unstyled">
                <router-link to="/pricing" ><a target="_blank">Pricing Plans</a></router-link><br/>
                <router-link to="/blog-2-column" ><a target="_blank">News</a></router-link><br/>
                <router-link to="/events" ><a target="_blank">events</a></router-link><br/>
                <router-link to="/contact-us" ><a target="_blank">Contact</a></router-link>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12 footer-menu">
            <div class="footer-item">
              <h4>Support</h4>
              <ul class="list-unstyled">
                <router-link to="/contact-us" ><a target="_blank">Support Center</a></router-link><br/>
                <router-link to="/about-us" ><a target="_blank">Partners</a></router-link><br/>
                <router-link to="/faq" ><a target="_blank">FAQ</a></router-link><br/>
                <router-link to="/404" ><a target="_blank">404</a></router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center">
      <div class="copyright">
        <p>&copy; 2021 <span>Pranayama</span> All rights reserved</p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>