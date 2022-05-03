<template>
  <div>
    <button v-on="$listeners" class="btn">{{ BtnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    BtnText: String,
  },
};
</script>

<style scoped>
.btn {
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 20px;
  width: 100%;
}
</style>
