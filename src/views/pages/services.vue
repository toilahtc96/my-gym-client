<template>
  <div class="wrraper">
    <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-page-Title :heading="heading" :sousHeading="sousHeading"></app-page-Title>
    <app-services></app-services>
    <app-newsLetter :class="'area'"></app-newsLetter>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import pageTitle from "../../components/widget/pageTitle.vue";
import services from "../../components/services.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";
export default {
  data: function () {
    return {
      heading: "Services",
      sousHeading: "Services",
    };
  },
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-page-Title": pageTitle,
    "app-services": services,
    "app-newsLetter": newsLetter,
    "app-footer": footer
  },
};
</script>

<style lang="scss" scoped></style>