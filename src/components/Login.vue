<template>
  <div>
    <form class="form">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <span class="remember-me">
        <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" />
        <label class="label-checkbox" for="styled-checkbox-1"
          >Remember me</label
        >
      </span>

      <Button :BtnText="'Login'" @click="OnLogin()" />
      <div class="forgot-password">Have you forgotten your password?</div>
    </form>
  </div>
</template>

<script>
import Button from "../components/reusables/Button.vue";
export default {
  components: { Button },
  methods: {
    OnLogin() {
      console.log("email", this.email);
      console.log("password", this.password);
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
input {
  border: none;
  border-bottom: 2px solid #d8d8d8;
  margin-bottom: 4rem;
  padding: 15px;
}

.form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.label-checkbox {
  font-size: 16px;
}

.remember-me {
  position: relative;
  bottom: 40px;
  height: 40px;
}
.forgot-password {
  margin: 0 auto;
  margin-top: 10px;
}
</style>
