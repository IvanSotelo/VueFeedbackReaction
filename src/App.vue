<template lang="pug">
  #app(:style="style")
    vue-feedback-reaction.feedback(v-model="feedback")
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
  },
  computed: {
    style () {
      return {
        background: this.feedback === '1' ? '#5B37B7'
          : this.feedback === '2' ? '#BE3099'
            : this.feedback === '3' ? '#E39A28'
              : this.feedback === '4' ? '#11aa50'
                : '#1194AA',
        transition: 'all 500ms linear'
      }
    }
  }
}
</script>
<style lang="stylus">
body
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  display flex
  flex-direction column
  height 100vh
  align-items center
  justify-content center
  .feedback
    padding 10px
    text-align center
    display inline-flex
    background white
    border-radius 12px
</style>
