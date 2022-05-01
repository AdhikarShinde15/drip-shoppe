<template>
  <div>
     <VueSlickCarousel :autoplay="true">
      <img src="../assets/homeCar.svg" alt="">
      <img src="../assets/homeCar.svg" alt="">
      <img src="../assets/homeCar.svg" alt="">
      <img src="../assets/homeCar.svg" alt="">
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
</style>