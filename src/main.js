import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Axios from '../axiosAPI';


Vue.config.productionTip = false
Vue.$http = Axios;


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
