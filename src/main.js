import Vue from 'vue'
import App from './App.vue'
import { VueFeedbackReaction } from './index'

Vue.config.productionTip = false
Vue.use(VueFeedbackReaction)

new Vue({
  components: { VueFeedbackReaction },
  render: h => h(App)
}).$mount('#app')
