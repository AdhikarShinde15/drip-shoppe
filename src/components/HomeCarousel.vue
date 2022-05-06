<template>
  <div class="relative">
    <VueSlickCarousel :autoplay="true">
      <img src="../assets/homeCar.svg" alt="" />
      <img src="../assets/homeCar.svg" alt="" />
      <img src="../assets/homeCar.svg" alt="" />
      <img src="../assets/homeCar.svg" alt="" />
    </VueSlickCarousel>
    <div>
      <div class="overlay">
        <div class="item">Gold Big Hoops</div>
        <div class="price">$ 68.00</div>

        <button class="btn">VIEW PRODUCT</button>
      </div>
    </div>
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

<style scoped>
.relative {
  position: relative;
}
.overlay {
  position: absolute;
  top: 30%;
  left: 30px;
}
.overlay .item {
  font-size: 33px;
  font-weight: 500;
  color: white;
}
.overlay .price {
  font-size: 26px;
  font-weight: 500;
  color: white;
  margin-top: 15px;
}
.btn {
  padding: 15px;
  background-color: transparent;
  border: solid white;
  border-radius: 10px;
  margin-top: 35px;
  color: white;
}
</style>
