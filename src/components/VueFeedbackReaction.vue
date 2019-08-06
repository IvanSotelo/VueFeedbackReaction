<template lang="pug">
  .vue-feedback-reaction
    .reaction
</template>

<script>
export default {
  name: 'VueFeedbackReaction'
}
</script>
<style lang="stylus">
.vue-feedback-reaction
  margin 10px auto
  padding 0
  text-align center
  display inline-block
  .reaction
    position relative
    display inline-block
    -webkit-transition all .2s ease
    transition all .2s ease
    margin-right 8px
    cursor pointer
</style>
