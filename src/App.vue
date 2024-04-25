<template>
  <div id="app">
    <router-view />
       <app-scroll></app-scroll>
  </div>
</template>

<script>
import scroll from "../src/components/scrolltotop.vue";
export default {
  name: "App",
  components: {
    "app-scroll": scroll,
  },
};
</script>

<style lang="scss" scoped></style>