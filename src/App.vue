<script setup>
import Header from './views/header.vue';
import Footer from './views/footer.vue';

</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>
</style>