<template>
  <div class="wrraper">
    <div class="headrtopone">
      <app-bar-top></app-bar-top>
      <app-header-inner></app-header-inner>
    </div>

    <app-header></app-header>
    <app-services></app-services>
    <app-about-us></app-about-us>
    <app-schedle> </app-schedle>
    <app-call-to-action></app-call-to-action>
    <app-events></app-events>
    <app-team></app-team>
    <app-pricing> </app-pricing>
    <app-testimonials> </app-testimonials>
    <app-blog> </app-blog>
    <app-contact></app-contact>
    <app-newsLetter></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../components/upperBar.vue";
import headerInner from "../components/headerInner";
import headerV1 from "../header/headerV1";
import services from "../components/services";
import aboutUs from "../components/aboutUs";
import classSchedle from "../components/schedule";
import callToAction from "../components/callToAction";
import events from "../components/events";
import team from "../components/team";
import pricing from "../components/pricing";
import testimonials from "../components/testimonials";
import blog from "../components/blog";
import contact from "../components/contact";
import newsLetter from "../components/newsletter";
import footer from "../components/footer.vue";

export default {
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-header": headerV1,
    "app-services": services,
    "app-about-us": aboutUs,
    "app-schedle": classSchedle,
    "app-call-to-action": callToAction,
    "app-events": events,
    "app-team": team,
    "app-pricing": pricing,
    "app-testimonials": testimonials,
    "app-blog": blog,
    "app-contact": contact,
    "app-newsLetter": newsLetter,
    "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>