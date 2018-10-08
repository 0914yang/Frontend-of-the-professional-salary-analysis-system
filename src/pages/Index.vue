<template>
  <div id = "index">
    <app-nav></app-nav>
    <app-search></app-search>
    <app-city></app-city>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Search from '../components/index/Search.vue'
import City from '../components/index/City.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-search': Search,
    'app-city': City
  }
};
</script>

<style>

</style>
