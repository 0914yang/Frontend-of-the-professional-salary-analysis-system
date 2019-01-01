import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Jobsalaryanalysis from '@/pages/Jobsalaryanalysis.vue'
import Profile from '@/pages/Profile.vue'
import Singlecity from '@/pages/Singlecity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/jobsalaryanalysis',
      name: 'Jobsalaryanalysis',
      component: Jobsalaryanalysis
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/singlecity',
      name: 'Singlecity',
      component: Singlecity
    }
  ]
})
