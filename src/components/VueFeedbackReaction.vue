<template lang="pug">
  .vue-feedback-reaction(:style="{ width: containerWidth, height: containerHeight }")
    .reaction(v-for="(reactionItem, index) in reactionItems")
      vue-reaction(
        v-model="reactionValue"
        :reaction="String(index + 1)"
        :hover-image="reactionItem.hoverImage"
        :image="reactionItem.image"
        :selected-image="reactionItem.selectedImage"
        :width="emojiWidth"
        :height="emojiHeight"
      )
      span(:class="labelClass") {{ reactionItem.label }}
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
      validator: v => v && (v.length === 0 || v.length === 5)
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
      reactionValue: '',
      reactionItems: []
    }
  },
  mounted () {
    this.reactionValue = this.value
    this.reactionItems = [
      {
        hoverImage: this.hate,
        image: this.hateInactive,
        selectedImage: this.hateActive,
        label: this.labels[0] || ''
      },
      {
        hoverImage: this.disappointed,
        image: this.disappointedInactive,
        selectedImage: this.disappointedActive,
        label: this.labels[1] || ''
      },
      {
        hoverImage: this.natural,
        image: this.naturalInactive,
        selectedImage: this.naturalActive,
        label: this.labels[2] || ''
      },
      {
        hoverImage: this.good,
        image: this.goodInactive,
        selectedImage: this.goodActive,
        label: this.labels[3] || ''
      },
      {
        hoverImage: this.excellent,
        image: this.excellentInactive,
        selectedImage: this.excellentActive,
        label: this.labels[4] || ''
      }
    ]
  },
  watch: {
    reactionValue (value) {
      this.$emit('input', value)
    },
    value (val) {
      this.reactionValue = val
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
