<template lang="pug">
  #app(:style="style")
    h1 All emojis
    vue-feedback-reaction.feedback(v-model="feedback" :labels="['Very Poor', 'Poor', 'Average', 'Good', 'Excellent']" label-class="font-medium text-sm text-gray-800")
    h2 Single emoji
    vue-reaction-emoji(
      :reaction="reaction"
      :is-active="active",
      :is-disabled="disabled"
    )
</template>

<script>
import { VueFeedbackReaction, VueReactionEmoji } from './index'
export default {
  name: 'app',
  components: {
    VueFeedbackReaction,
    VueReactionEmoji
  },
  data () {
    return {
      feedback: '',
      reaction: 'hate',
      active: false,
      disabled: false
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
h1, h2
  color #2d3748
  font-weight 600
</style>
