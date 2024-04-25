<template>
  <!-- Start Page Title -->
  <section class="page-title" id="page-title">
    <div class="container">
      <div class="content">
        <h2>{{ heading }}</h2>
        <ul class="list-unstyled">
          <li>
            <router-link to="/index-1">Home</router-link> <i class="fas fa-angle-double-right"></i>
          </li>
          <li>{{ sousHeading }}</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- End Page Title -->
</template>

<script>
export default {
  name: "pageTitle",
  props: ["heading", "sousHeading"],
};
</script>

<style lang="scss" scoped></style>
