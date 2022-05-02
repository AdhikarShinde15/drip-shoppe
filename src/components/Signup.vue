<template>
  <div>
    <form class="register-form">
      <input type="string" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <Button :BtnText="'Register'"></Button>
    </form>
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
.register-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}
input {
  border: none;
  border-bottom: 2px solid #d8d8d8;
  margin-bottom: 4rem;
  padding: 15px;
}
</style>
