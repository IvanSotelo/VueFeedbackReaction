<template lang="pug">
  .vue-reaction(:style="{ width, height }")
    img(
      v-on="listeners"
      :src="currentImage"
      :style="{ width, height }"
      :class="{ 'h-60': hoverx }"
      @click="checkThenUpdateReaction"
      @keydown.space="checkThenUpdateReaction"
    )
    .effect
</template>

<script>
import feedbackMixin from '@/mixins/feedback-mixin'
import reactionMixin from '@/mixins/reaction-mixin'

export default {
  name: 'VueReactionEmoji',
  mixins: [feedbackMixin, reactionMixin],
  props: {
    reaction: {
      type: String,
      default: 'natural',
      validator: (v) => (['hate', 'disappointed', 'natural', 'good', 'excellent'].includes(v))
    },
    isActive: {
      type: Boolean
    }
  },
  computed: {
    currentImage () {
      return !this.isDisabled && this.hoverx
        ? this[this.reaction]
        : this.isActive
          ? this[`${this.reaction}Active`]
          : this[`${this.reaction}Inactive`]
    }
  },
  methods: {
    checkThenUpdateReaction () {
      if (this.isDisabled) return
      this.updateActiveReaction()
    }
  }
}
</script>

<style lang="stylus">
@import "../assets/stylus/vue-reaction.styl"
</style>
