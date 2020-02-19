import VueFeedbackReaction from './components/VueFeedbackReaction'
import VueReactionEmoji from './components/VueReactionEmoji'

export default {
  install (Vue) {
    Vue.component('vue-feedback-reaction', VueFeedbackReaction)
  }
}

export { VueFeedbackReaction, VueReactionEmoji }
