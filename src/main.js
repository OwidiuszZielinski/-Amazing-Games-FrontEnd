import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$apiurl = 'http://192.168.1.103:8082'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
