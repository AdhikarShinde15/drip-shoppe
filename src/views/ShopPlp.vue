<template>
  <div>
    <span class="title">
      <h1>Shop The Latest</h1>
    </span>
    <Filters />
  </div>
</template>

<script>
import Filters from "../components/PlpFilters.vue";
export default {
  components: {
    Filters,
  },
};
</script>

<style scoped>
.title {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 43px;
  color: #000000;
}
</style>
