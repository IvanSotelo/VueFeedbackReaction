<template lang="pug">
  .vue-feedback-reaction(:style="{ width: containerWidth, height: containerHeight }")
    .reaction
      vue-reaction(
        v-model="reactionValue"
        reaction="1"
        :hover-image="hate"
        :image="hateInactive"
        :selected-image="hateActive"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ labels[0] || '' }}
    .reaction
      vue-reaction(
        v-model="reactionValue"
        reaction="2"
        :hover-image="disappointed"
        :image="disappointedInactive"
        :selected-image="disappointedActive"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ labels[1] || '' }}
    .reaction
      vue-reaction(
        v-model="reactionValue"
        reaction="3"
        :hover-image="natural"
        :image="naturalInactive"
        :selected-image="naturalActive"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ labels[2] || '' }}
    .reaction
      vue-reaction(
        v-model="reactionValue"
        reaction="4"
        :hover-image="good"
        :image="goodInactive"
        :selected-image="goodActive"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ labels[3] || '' }}
    .reaction
      vue-reaction(
        v-model="reactionValue"
        reaction="5"
        :hover-image="excellent"
        :image="excellentInactive"
        :selected-image="excellentActive"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ labels[4] || '' }}
</template>

<script>
import VueReaction from '@/components/VueReaction.vue'
import feedbackMixin from '@/mixins/feedback-mixin'

export default {
  name: 'VueFeedbackReaction',
  components: {
    VueReaction
  },
  mixins: [feedbackMixin],
  props: {
    value: {
      default: '',
      type: [String, Number]
    },
    labels: {
      default: () => [],
      type: Array,
      validator: v => v && v.length ? v.length === 5 : false
    },
    labelClass: {
      default: '',
      type: [Object, Array, String]
    },
    emojiWidth: {
      default: '',
      type: [String, Number]
    },
    emojiHeight: {
      default: '',
      type: [String, Number]
    },
    containerWidth: {
      default: '',
      type: [String, Number]
    },
    containerHeight: {
      default: '',
      type: [String, Number]
    }
  },
  data () {
    return {
      reactionValue: ''
    }
  },
  mounted () {
    this.reactionValue = this.value
  },
  watch: {
    reactionValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="stylus">
.vue-feedback-reaction
  margin 10px auto
  padding 0
  text-align center
  display inline-flex
  .reaction
    position relative
    display flex
    flex-direction column
    justify-content center
    align-items center
    -webkit-transition all .2s ease
    transition all .2s ease
    margin 0 auto
    padding 0 8px
    cursor pointer
</style>
