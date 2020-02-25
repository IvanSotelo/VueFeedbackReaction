<template lang="pug">
  .vue-reaction(:style="{ width, height }")
    img(
      v-on="listeners"
      :src="currentImage"
      :style="{ width, height }"
      @click="updateActiveReaction"
      @keydown.space="updateActiveReaction"
    )
    .effect
</template>

<script>
import reactionMixin from '@/mixins/reaction-mixin'

export default {
  name: 'VueReaction',
  mixins: [reactionMixin],
  props: {
    value: {
      default: '',
      type: [String, Number]
    },
    reaction: {
      type: String
    },
    selectedImage: {
      type: String
    },
    hoverImage: {
      type: String
    },
    image: {
      type: String
    }
  },
  computed: {
    currentImage () {
      return this.inactive || this.disabled
        ? this.image
        : this.hoverx
          ? this.hoverImage
          : this.value === this.reaction
            ? this.selectedImage
            : this.image
    }
  }
}
</script>

<style lang="stylus">
@import "../assets/stylus/vue-reaction.styl"
</style>
