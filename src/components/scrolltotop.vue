<template>
   <!-- Start Scroll To Top  -->
   <transition name="fade">
      <div
         id="pagetop"
         class="fixed right-0 bottom-0"
         v-show="scY > 1300"
         @click="toTop"
         >
         <div class="scroll-top">
            <i class="fa fa-arrow-up"></i>
         </div>
      </div>
   </transition>
   <!-- End Scroll To Top -->
</template>

<script>
export default {
  data: function () {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 10);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>