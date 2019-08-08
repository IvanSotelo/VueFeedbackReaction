<template lang="pug">
  .vue-feedback-reaction
    vue-reaction(v-model="reactionValue" reaction="1" :hover-image="hate" :image="hateInactive" :selected-image="hateActive")
    vue-reaction(v-model="reactionValue" reaction="2" :hover-image="disappointed" :image="disappointedInactive" :selected-image="disappointedActive")
    vue-reaction(v-model="reactionValue" reaction="3" :hover-image="natural" :image="naturalInactive" :selected-image="naturalActive")
    vue-reaction(v-model="reactionValue" reaction="4" :hover-image="good" :image="goodInactive" :selected-image="goodActive")
    vue-reaction(v-model="reactionValue" reaction="5" :hover-image="excellent" :image="excellentInactive" :selected-image="excellentActive")
</template>

<script>
import VueReaction from '@/components/VueReaction.vue'
import Good from '@/assets/good.gif'
import Hate from '@/assets/hate.gif'
import Natural from '@/assets/natural.gif'
import Excellent from '@/assets/excellent.gif'
import Disappointed from '@/assets/disappointed.gif'
import GoodInactive from '@/assets/good_inactive.png'
import HateInactive from '@/assets/hate_inactive.png'
import NaturalInactive from '@/assets/natural_inactive.png'
import ExcellentInactive from '@/assets/excellent_inactive.png'
import DisappointedInactive from '@/assets/disappointed_inactive.png'
import GoodActive from '@/assets/good_active.png'
import HateActive from '@/assets/hate_active.png'
import NaturalActive from '@/assets/natural_active.png'
import ExcellentActive from '@/assets/excellent_active.png'
import DisappointedActive from '@/assets/disappointed_active.png'

export default {
  name: 'VueFeedbackReaction',
  components: {
    VueReaction
  },
  props: {
    value: {
      default: '',
      type: [String, Number]
    }
  },
  mounted () {
    this.reactionValue = this.value
  },
  data () {
    return {
      reactionValue: '',
      good: Good,
      hate: Hate,
      natural: Natural,
      excellent: Excellent,
      disappointed: Disappointed,
      goodInactive: GoodInactive,
      hateInactive: HateInactive,
      naturalInactive: NaturalInactive,
      excellentInactive: ExcellentInactive,
      disappointedInactive: DisappointedInactive,
      goodActive: GoodActive,
      hateActive: HateActive,
      naturalActive: NaturalActive,
      excellentActive: ExcellentActive,
      disappointedActive: DisappointedActive
    }
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
    display inline-block
    -webkit-transition all .2s ease
    transition all .2s ease
    margin-right 8px
    cursor pointer
</style>
