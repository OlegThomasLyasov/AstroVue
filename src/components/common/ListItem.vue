<template lang="pug">
div(v-if="type === 'is-number'" :class="$style['item-number']")
  span(:class="$style.number") 
    span(:class="$style.text") {{ index + 1 }}
  li(:class="$style['li-number']" v-html="data")
li(v-else :class="$style.li" v-html="data")
</template>

<script lang="ts">

export default {
  props: {  
    data: {
      type: String,
      required: true
    },
    type: {
        type: String,
        required: false
    },
    index: {
        type: Number,
        required: false
    }
  },
}

</script>

<style lang="stylus" module>

.li
  font-size 14px
  line-height 150%
  margin 0 0 15px
  padding-left 39px
  font-weight 400
  color #080D13A6
  background-image url(/src/assets/images/icons/Marker.svg)
  background-position 0 0
  background-size 21px 21px
  background-repeat no-repeat
.li p
  display inline
  color #0057FF
.number
  background rgba(0,87,255,0.15)
  color #0057ff
  text-align: center
  border-radius: 20px
  width 24px
  height 24px
  font-weight 700
  font-size 14px
  line-height 175%
  flex-shrink 0

.item-number
  display flex
  flex-direction row
.li-number
  font-size 14px
  line-height 175%
  margin 0 0 15px
  padding-left 15px
  font-weight 400
  color #080D13A6
</style>