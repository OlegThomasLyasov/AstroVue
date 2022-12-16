<template lang="pug">
div
  div(:class="[$style.loader, $style[color]]")
</template>

<script lang="ts">
export default {
    props: {
      color: {
        type: String,
        required: true
      }
    },
}
</script>

<style lang="stylus" module>
.loader
  border-radius 100%
  position relative
  margin 0 auto .6rem
  width 2.2rem
  height 2.2rem
  &:before,
  &:after
    content ""
    position absolute
    display block
    top 0
    left 0
    width 100%
    height 100%
    border-radius 50%

  &:before
    z-index 100
    animation spin 1s infinite
    border 0.3rem solid transparent

  &:after
    border 0.3rem solid white

.blue
  &:before
    border-top-color #2042AB

.colorBuh
  &:before
    border-top-color #3c69f3

@keyframes spin
  0%
    -webkit-transform rotate(0deg)
    -ms-transform rotate(0deg)
    -o-transform rotate(0deg)
    transform rotate(0deg)

  100%
    -webkit-transform rotate(360deg)
    -ms-transform rotate(360deg)
    -o-transform rotate(360deg)
    transform rotate(360deg)
</style>
