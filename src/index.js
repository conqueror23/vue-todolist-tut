import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'



Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
