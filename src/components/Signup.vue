<template>
  <div>
    <form class="register-form">
      <input type="string" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
    </form>
  </div>
</template>

<script>
export default {};
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
