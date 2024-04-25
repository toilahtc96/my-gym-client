<template>
  <div class="wrraper">
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
     <app-page-Title :heading="heading" :sousHeading="sousHeading"></app-page-Title>
    <app-about-us />
    <app-call-to-action />
    <app-team />
    <app-testimonials />
    <app-blog />
    <app-newsLetter :class="'area'" />
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import aboutUs from "../../components/aboutUs.vue";
import callToAction from "../../components/callToAction.vue";
import team from "../../components/team.vue";
import testimonials from "../../components/testimonials.vue";
import blog from "../../components/blog.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";
export default {
  data: function () {
    return {
      heading: "About Us",
      sousHeading: "About Us",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-about-us": aboutUs,
    "app-call-to-action": callToAction,
    "app-team": team,
    "app-testimonials": testimonials,
    "app-blog": blog,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>