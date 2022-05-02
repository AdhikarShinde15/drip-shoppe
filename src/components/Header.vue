<template>
  <header class="header">
    <div class="logo-wrapper" @click="toHome()"><span>S</span>HOPPE</div>
    <div class="links-wrapper">
      <div class="flex links-first">
        <h5 class="menu-link" @click="toShopPlp()">Shop</h5>
        <h5 class="menu-link" @click="toBlogs()">Blog</h5>
        <h5 class="menu-link" @click="toOurStory()">Our Story</h5>
      </div>
      <div class="flex links-second">
        <div class="menu-link"><img src="../assets/search-icon.svg" /></div>
        <div class="menu-link" @click="toMyCart()"><img src="../assets/cart-icon.svg" /></div>
        <div class="menu-link" @click="toMyAccount()"><img src="../assets/user-icon.svg" /></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toShopPlp() {
      this.$router.push("/shop");
    },
    toBlogs() {
      this.$router.push("/blogs");
    },
    toOurStory() {
      this.$router.push("/ourstory");
    },
    toMyAccount() {
        this.$router.push("/my-account")
    },
    toMyCart() {
        this.$router.push("/cart")
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.logo-wrapper {
  flex: 0 0 25%;
}
.links-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 75%;
}
.links-wrapper .flex {
  display: flex;
}
.flex.links-first {
  gap: 64px;
  padding-right: 48px;
  border-right: 1px solid #707070;
}
.flex.links-second {
  gap: 39px;
  padding-left: 48px;
}
.logo-wrapper {
  font-family: "Allerta Stencil";
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
}
.logo-wrapper span {
  color: #a18a68;
}
h5.menu-link {
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  margin: 0;
}
</style>
