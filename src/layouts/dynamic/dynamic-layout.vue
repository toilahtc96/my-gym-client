<script setup>
import { ref, watch, markRaw } from "vue";
import {useRoute} from "vue-router";
import DefaultLayout from "@/layouts/default/default-layout.vue";

const route = useRoute();
const layout = ref(null);

watch(
  route,
  (to) => {
    try {
      const metaLayout =
        to.meta.layout && import(`../${to.meta.layout}/index.vue`);
      layout.value = markRaw(metaLayout || DefaultLayout);
    } catch (e) {
      layout.value = markRaw(DefaultLayout);
    }
  },
  { flush: "pre", immediate: true, deep: true }
);
</script>

<template>
  <suspense>
    <template #default>
      <component :is="layout" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>
