<template lang="pug">
  #app(:style="style")
    vue-feedback-reaction.feedback(v-model="feedback" :labels="['Very Poor', 'Poor', 'Average', 'Good', 'Excellent']" label-class="font-medium text-sm text-gray-800")
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
.text-sm
  font-size 0.875rem
.text-gray-800
  color #2d3748
.font-medium
  font-weight 500
</style>
