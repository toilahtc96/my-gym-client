<template>
  <a-layout>
      <site-header></site-header>
      <site-content></site-content>
      <site-footer></site-footer>
  </a-layout>
</template>

<script>
import SiteHeader from "../../components/admin/header/header.vue";
import SiteContent from "../../components/admin/content/content.vue";
import SiteFooter from "../../components/admin/footer/footer.vue";
import {Layout as ALayout} from 'ant-design-vue';

export default {
  components: {
    "site-header": SiteHeader,
    "site-content": SiteContent,
    "site-footer": SiteFooter,
    "a-layout": ALayout
  },
};
</script>