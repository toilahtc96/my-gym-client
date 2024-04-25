<template>
  <div>
    <!-- Import component -->
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title
      :heading="heading"
      :sousHeading="sousHeading"
    ></app-page-Title>

    <!-- Start Team Single -->
    <section class="team-single">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="trainer-image">
              <img
                class="img-fluid"
                src="https://via.placeholder.com/359x400"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-8">
            <div class="trainer-info">
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                pariatur.
              </p>
              <ul class="info list-unstyled">
                <li><span>Name: </span>Elina Ekman</li>
                <li><span>Speciality: </span>Body Balance</li>
                <li><span>Email: </span>Elina@pranayama.com</li>
                <li><span>Phone: </span>+1 212 120-4102</li>
                <li>
                  <span>social: </span>
                  <ul class="social list-unstyled">
                    <li>
                      <a href="https://themeforest.net/" target="_blank"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="https://themeforest.net/" target="_blank"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="https://themeforest.net/" target="_blank"><i class="fab fa-dribbble"></i></a>
                    </li>
                    <li>
                      <a href="https://themeforest.net/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </li>
              </ul>
              <router-link class="view-classes" to="/team-single"><i class="fa fa-chevron-circle-right"></i>View Classes</router-link>
            </div>
          </div>
        </div>
        <div class="my-classes">
          <h3>About My Classes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim.
          </p>
          <p>
            Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui
            officia deserunt.mollit anim id est laborum. sed ut pers piciatis
            unde omnis iste natus error.sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora.
          </p>
        </div>
        <div class="related-trainers">
          <h3>Related Trainers</h3>
          <div class="row">
            <!--Import Components  NewsLetter -->
            <app-team></app-team>
          </div>
        </div>
      </div>
    </section>
    <!--End Team Single -->

    <!-- Import components -->
    <app-newsLetter :class="'area'"></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>
<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import team from "../../components/team.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";

export default {
  data: function () {
    return {
      heading: "Team Single",
      sousHeading: "Team Single",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-team": team,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>