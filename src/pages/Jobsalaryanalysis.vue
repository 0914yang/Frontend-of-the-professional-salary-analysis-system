<template>
  <div id = "jobsalaryanalysis">
    <app-nav></app-nav>
    <app-analysis></app-analysis>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Analysis from '../components/jobsalaryanalysis/Analysis.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-analysis': Analysis
  }
};
</script>

<style scoped>

</style>
