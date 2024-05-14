<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default/default-layout.vue";
import Vue from 'vue';

export default {
  data() {
    return {
      layout: DefaultLayout,
      router: null,
      route: null
    };
  },
  created() {
    this.route = Vue.$route;
    this.watchRoute();
  },
  methods: {
    watchRoute() {
      this.$watch(
        "route",
        to => {
          try {
            const metaLayout =
              to.meta.layout && require(`../${to.meta.layout}/index.vue`);
            this.layout = metaLayout || DefaultLayout;
          } catch (e) {
            this.layout = DefaultLayout;
          }
        },
        { immediate: true, deep: true }
      );
    }
  }
};
</script>