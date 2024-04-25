<template>
  <div class="wrraper">
     <app-bar-top></app-bar-top>
    <app-header-inner></app-header-inner>
    <app-error-components></app-error-components>
    <app-newsLetter :class="'area'"></app-newsLetter>
     <app-footer> </app-footer>
  </div>
</template>

<script>
import UpperBar from "../../components/upperBar.vue";
import headerInner from "../../components/headerInner";
import errorComponents from "../../components/errorpage.vue";
import newsLetter from "../../components/newsletter.vue";
import footer from "../../components/footer.vue";
export default {
  components: {
    "app-bar-top": UpperBar,
    "app-header-inner": headerInner,
    "app-error-components": errorComponents,
    "app-newsLetter": newsLetter,
     "app-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>
