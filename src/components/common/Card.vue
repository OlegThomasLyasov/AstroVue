<template lang="pug">
section
  div(:class="$style.row")
    div(v-for="(item,index) in data.items" :class="$style.cardWrapper" :key="index")
      div(:class="$style.CardIcon")
        IconsVue(:class="$style.Icon" :data="item.icon")
      div(:class="$style.textBox")  
        div(:class="$style.MainText" v-html="item.title")
        div(:class="$style.desc" v-html="item.text")
</template>

<script lang="ts">
import IconsVue from './Icons.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    IconsVue
  }
}
</script>
<style lang="stylus" module>
section
    padding 0 16px
    +mediaQuery768()
       padding 0 30px
    +mediaQuery1440()
       padding 0 120px
.row
  display flex
  flex-direction row
  flex-wrap wrap
.cardWrapper
    background-color #FFFFFF
    box-shadow 0px 4px 15px rgba(8, 13, 19, 0.03)
    border-radius: 10px
    flex-direction column
    align-items flex-start
    position relative
    width 100%
    &:not(:last-child)
      margin-bottom 60px
    &:nth-child(3n+3)
        margin-right 0px
    +mediaQuery1024()
      margin 0 30px 60px 0
      width 301px
      &:nth-last-child(-n+3)
        margin-bottom 0
    +mediaQuery1440()
      width 380px
.textBox 
  padding 50px 30px 30px 30px
.CardIcon
  position absolute
  width 60px
  height 60px
  left 30px
  top -30px
  background #0057FF
  box-shadow 0px 6px 10px rgba(0, 87, 255, 0.15)
  border-radius 10px
  display flex
  align-items center
  justify-content: center
.MainText 
  font-weight: 700
  font-size 14px
  letter-spacing -0.02em
  +mediaQuery768()
    font-size 16px
.desc 
  font-weight 400
  font-size 14px
  line-height 150%
  letter-spacing -0.02em
  color rgba(8, 13, 19, 0.65)
  margin-top 12px
</style>