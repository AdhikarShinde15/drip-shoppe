<template>
  <div class="container">
    <div class="heading">Have You Forgotten Your Password</div>

    <div class="subHeading">
      <p>If you've forgotten your password, enter your e-mail</p>
      <p>address and we'll send you an e-mail</p>
      <div><input id="email" type="email" placeholder="Email" /></div>
    </div>
    <Button :BtnText="'RESET PASSWORD'"></Button>
  </div>
</template>

<script>
import Button from "../components/reusables/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 25vh;
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  min-width: max-content;
}
.heading {
  font-size: 33px;
  font-weight: 500;
}
.subHeading {
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
#email {
  border: none;
  width: 100%;
  border-bottom: 2px solid #d8d8d8;
  padding: 12px;
}
</style>
