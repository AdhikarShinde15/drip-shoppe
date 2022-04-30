<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from "../src/components/Header.vue"
import Footer from "../src/components/Footer.vue"
export default {
  components : {
    Header,
    Footer
  }
}
</script>
<style>

</style>
