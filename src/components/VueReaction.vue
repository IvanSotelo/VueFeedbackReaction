<template lang="pug">
  .vue-reaction(:style="{ width, height }")
    img(:src="currentImage" v-on="listeners" @click="updateActiveReaction" @keydown.space="updateActiveReaction" :style="{ width, height }")
    .effect
</template>

<script>
export default {
  name: 'VueReaction',
  props: {
    value: {
      default: '',
      type: [String, Number]
    },
    selectedImage: {
      type: String
    },
    hoverImage: {
      type: String
    },
    image: {
      type: String
    },
    reaction: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    }
  },
  data () {
    return {
      hoverx: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        mouseover: (event) => {
          // eslint-disable-next-line
          this.hoverx = true
        },
        mouseout: (event) => {
          // eslint-disable-next-line
          this.hoverx = false
        },
        mousedown: (event) => {
          let circle = this.$el.querySelector('.effect')
          circle.classList.remove('animated')
          circle.classList.add('animated')
          setTimeout(() => circle.classList.remove('animated'), 2000)
        }
      }
    },
    currentImage () {
      return this.hoverx ? this.hoverImage : this.value === this.reaction ? this.selectedImage : this.image
    }
  },
  methods: {
    updateActiveReaction () {
      this.$emit('input', this.reaction)
    }
  }
}
</script>
<style lang="stylus">
.vue-reaction
  position relative
  display flex
  -webkit-transition all .2s ease
  transition all .2s ease
  justify-content center
  align-items center
  cursor pointer
  height 60px
  width 58px
  align-items center
  &:hover
    .effect
      height: 44px;
      width: 44px;
      right: 5px;
      // animation pulse 2s infinite

  .effect
    height: 36px;
    width: 36px;
    margin: 0 auto;
    -webkit-transition all .2s ease-in-out
    transition all .2s ease-in-out
    display: table-footer-group;
    border-radius: 50%;
    z-index: 0;
    position: absolute;
    right: 12px;
  .animated
    animation pulse 2s
  img
    height 45px
    margin 0 auto
    -webkit-transition all .2s ease-in-out
    transition all .2s ease-in-out
    border-radius 50%
    z-index: 1
    &:hover
      height 60px

@-webkit-keyframes pulse {
  0% {
      -webkit-box-shadow 0 0 0 0 rgba(254,215,100, 1)
  }
  70% {
      -webkit-box-shadow 0 0 0 20px rgba(254,215,100, 0)
  }
  100% {
      -webkit-box-shadow 0 0 0 0 rgba(254,215,100, 0)
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow 0 0 0 0 rgba(254,215,100, 1)
    box-shadow 0 0 0 0 rgba(254,215,100, 1)
  }
  70% {
      -moz-box-shadow 0 0 0 20px rgba(254,215,100, 0)
      box-shadow 0 0 0 20px rgba(254,215,100, 0)
  }
  100% {
      -moz-box-shadow 0 0 0 0 rgba(254,215,100, 0)
      box-shadow 0 0 0 0 rgba(254,215,100, 0)
  }
}
</style>
