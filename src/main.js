import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from '../store'

export const cryptonator = axios.create({
  baseURL: "https://api.cryptonator.com/api/"
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
