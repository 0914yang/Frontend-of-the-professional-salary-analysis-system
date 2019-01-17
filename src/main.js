import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { store } from './store/store'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
