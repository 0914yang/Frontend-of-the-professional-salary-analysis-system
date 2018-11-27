<template>
  <div id = "profile">
    <app-nav></app-nav>
    <app-information></app-information>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Information from '../components/profile/Information.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-information': Information
  }
};
</script>

<style scoped>

</style>
