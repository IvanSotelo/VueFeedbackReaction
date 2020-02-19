export default {
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    isDisabled: {
      type: Boolean
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
          if (this.isDisabled) return
          this.hoverx = true
        },
        mouseout: (event) => {
          // eslint-disable-next-line
          if (this.isDisabled) return
          this.hoverx = false
        },
        mousedown: (event) => {
          if (this.isDisabled) return
          let circle = this.$el.querySelector('.effect')
          circle.classList.remove('animated')
          circle.classList.add('animated')
          setTimeout(() => circle.classList.remove('animated'), 2000)
        }
      }
    }
  },
  methods: {
    updateActiveReaction () {
      this.$emit('input', this.reaction)
    }
  }
}
