<template>
  <div id = "jobsalaryanalysis">
    <app-nav></app-nav>
    <app-analysis></app-analysis>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Analysis from '../components/jobsalaryanalysis/Analysis.vue'

export default {
  components: {
    'app-nav': Nav,
    'app-footer': Footer,
    'app-analysis': Analysis
  }
};
</script>

<style>

</style>
