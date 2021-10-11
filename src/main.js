import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

Vue.config.productionTip = false

window.addEventListener('popstate', function() {
  history.pushState(null, null, document.URL)
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
