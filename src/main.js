import Vue from 'vue'
import App from './App.vue'
import { vue-feedback-reaction } from './index'

Vue.config.productionTip = false
Vue.use(vue-feedback-reaction)

new Vue({
  components: { vue-feedback-reaction },
  render: h => h(App)
}).$mount('#app')
