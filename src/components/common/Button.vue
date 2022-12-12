<template lang="pug">
button(
  :class="$style.button"
) {{text}}
  
</template>

<script lang="ts">

export default  {
  props: {  
    text: {
      required: true
    },
  },
}
</script>

<style lang="stylus" module>
.button 
  width 100%
  background #0057FF
  justify-content center
  align-items center
  padding 15.5px 22px
  color #FFFFFF
  font-weight 700
  font-size 14px
  line-height 120%
  border-radius 8px
  letter-spacing -0.02em
  box-shadow: 0px 6px 10px rgba(0, 87, 255, 0.15)
  border none
  cursor pointer
  &:hover
    background-color #0075FF
  +mediaQuery768()
    width 172px
    height 48px
  +mediaQuery1024()
    width 206px
    height 60px
    font-size 16px
    padding 20px 30px
</style>