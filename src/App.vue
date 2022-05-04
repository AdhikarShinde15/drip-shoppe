<template>
    <div id="app" class="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>
<script>
import Header from '../src/components/Header.vue';
import Footer from '../src/components/Footer.vue';
export default {
    components: {
        Header,
        Footer,
    },
};
</script>
<style>
body {
    margin: 0;
}
.app {
    max-width: 93%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
