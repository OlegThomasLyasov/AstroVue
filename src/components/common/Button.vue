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
  width 206px
  height 60px
  background #0057FF
  justify-content center
  align-items center
  padding: 20px 30px
  color #FFFFFF
  font-weight: 700
  font-size: 16px
  line-height: 120%
  border-radius 8px
  margin-top 1.5rem
  letter-spacing: -0.02em
  box-shadow: 0px 6px 10px rgba(0, 87, 255, 0.15)
  border: none
</style>