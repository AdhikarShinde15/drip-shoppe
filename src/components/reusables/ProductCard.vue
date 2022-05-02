<template>
  <div class="product-card">
    <img src="../../assets/LiraEarring.svg" alt="" />
    <span class="product-name"> <h3>Lira Earrings</h3> </span>
    <span class="product-price"> <h4>$ 20,00</h4> </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
}
.product-name {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
}
.product-price {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-transform: capitalize;
  color: #a18a68;
}
</style>