<template>
  <div>
    <Carousel />
    <div class="home-flex">
      <span class="left"> <h1>Shop The Latest</h1> </span>
      <span class="right"> <h4 @click="toShopPlp()">View All</h4> </span>
    </div>
    <div class="latest-products">
      <LatestProducts v-for="i in 6" :key="i"/>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/HomeCarousel.vue";
import ProductCard from "../components/reusables/ProductCard.vue"
export default {
  components: {
    Carousel,
    LatestProducts: ProductCard
  },
  methods : {
    toShopPlp() {
      this.$router.push('/shop');
    }
  }
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
  font-size: 36px;
  line-height: 26px;
  text-transform: capitalize;
  color: #a18a68;
}
.right h4:hover {
  cursor: pointer;
}
.latest-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-gap: 5em;
}
</style>