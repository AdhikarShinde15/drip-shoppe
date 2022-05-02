<template>

    <div class="myAccount-card">
      <div class="heading">My Account</div>
      <div class="button-container">
        <button class="button" @click="toggleLogin()">Sign In</button>
        <button class="button" @click="toggleSignup()">Register</button>
      </div>
      <Login class="login" v-if="login" />
      <Signup class="login" v-if="!login" />
    </div>
  
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
export default {
  components: {
    Signup,
    Login,
  },
  data() {
    return {
      login: true,
    };
  },
  methods: {
    toggleLogin() {
      this.login = true;
    },
    toggleSignup() {
      this.login = false;
    },
  },
};
</script>

<style scoped>
.myAccount-card {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 25vh;
  /* border: 1px solid #bacdd8; */
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  min-width:400px
}
.button-container {
  width: 80%;
  display: flex;
  height: 4rem;
  /* border: 1px solid #bacdd8; */
  padding: 2px;
  border-radius: 15px;
  background-color: #efefef;
  margin-top: 3rem;
}
.button {
  width: 50%;
  background-color: #efefef;
  border: none;
  font-size: 1.6rem;
}
.button:hover {
  background-color: white;
  border-radius: 15px;
}
.heading {
  font-size: 3rem;
  font-weight: 500;
}
.login {
  width: 80%;
}
</style>
