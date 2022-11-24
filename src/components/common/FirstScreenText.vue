<template lang="pug">
div(:class="$style['text-wrap']")
  h1(v-if="data.title" :class="$style.title" v-html="data.title")
  div(:class="$style.desc" v-html="data.desc")
  List(
    v-if="data.items"
    :data="data.items"
  )
  Button(
     v-if="data.button"
    :text="data.button.text"
  )
</template>

<script lang="ts">
import Button from './Button.vue'
import List from './List.vue'

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    Button,
    List
  }
}
</script>

<style lang="stylus" module>
.text-wrap
  display flex
  flex-direction column
  +mediaQuery1024()
    padding 50px 0rem 50px 50px
    width: 427px
  +mediaQuery1440()
    padding 60px 0rem 60px 60px
    width 515px
.title
  margin 0 0 2rem
  font-weight 700
  color #080D13
  font-size 36px
  line-height 120%
  +mediaQuery1024()
    font-size 30px
.desc
  font-weight 400
  font-size 1.4rem
  line-height 150%
  color rgba(8, 13, 19, 0.65)
  margin-bottom 1.6rem
  br
    display none
</style>
