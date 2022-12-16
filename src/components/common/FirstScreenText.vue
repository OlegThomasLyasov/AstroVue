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
    :class="$style.button"
    :to="data.button.to"
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
  position relative
  padding 15px
  width 258px
  +mediaQuery768()
    padding 30px 0rem 30px 30px
    width 339px
  +mediaQuery1024()
    padding 50px 0rem 50px 50px
    width 427px
  +mediaQuery1440()
    padding 70px 0rem 70px 70px
    width 515px
.title
  margin 0 0 16px
  font-weight 700
  color #080D13
  font-size 21px
  line-height 120%
  +mediaQuery768()
    font-size 28px
  +mediaQuery1024()
    font-size 30px
    margin 0 0 21px
  +mediaQuery1440()
    font-size 36px
    margin 0 0 26px
.desc
  font-weight 400
  font-size 14px
  line-height 150%
  color rgba(8, 13, 19, 0.65)
  margin-bottom 15px
  br
    display none
.button
  +mediaQuery768()
    position absolute
    bottom 30px
  +mediaQuery1024()
    bottom 50px
  +mediaQuery1440()
    bottom 70px
</style>
