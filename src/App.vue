<template lang="pug">
  #app
    vue-feedback-reaction(v-model="feedback")
</template>

<script>
import { VueFeedbackReaction } from './index'
export default {
  name: 'app',
  components: {
    VueFeedbackReaction
  },
  data () {
    return {
      feedback: null
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
