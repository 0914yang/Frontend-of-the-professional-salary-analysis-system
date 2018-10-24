<template>
  <div id = "profile">
    <app-nav></app-nav>
    <app-information></app-information>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Information from '../components/profile/Information.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-footer': Footer,
    'app-information': Information
  }
};
</script>

<style>

</style>
