import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Jobsalaryanalysis from '@/pages/Jobsalaryanalysis.vue'
import Profile from '@/pages/Profile.vue'
import Singlecity from '@/pages/Singlecity.vue'
import Searchresults from '@/pages/Searchresults.vue'
import Singlecareer from '@/pages/Singlecareer.vue'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
    },
    {
      path: '/searchresults',
      name: 'Searchresults',
      component: Searchresults
    },
    {
      path: '/singlecareer',
      name: 'Singlecareer',
      component: Singlecareer
    }
  ]
})
