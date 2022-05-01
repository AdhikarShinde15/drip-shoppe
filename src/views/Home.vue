<template>
  <div>
    <Carousel />
    <div class="home-flex">
      <span class="left"> Shop The Latest </span>
      <span class="right"> View All </span>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/HomeCarousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>

<style scoped>
.home-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 43px;
  color: #000000;
}
.right {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-transform: capitalize;
  color: #a18a68;
}
</style>