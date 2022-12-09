<template lang="pug">
div(:class="$style.group")
    div(:class="$style.label") Номер телефона
    div(:class="$style.field")
        input(placeholder="+7" 
                mask="+7 (###) ###-##-##"
                :class="$style.input")
        Button(:text="data.button.text" :class="$style.button")
</template>

<script lang="ts">

import Button from '../Button.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    Button
  }
}
</script>

<style lang="stylus" module>
.group
    display flex
    flex-direction column
    margin-top 20px
    +mediaQuery768()
        flex-wrap wrap
        justify-content center
        align-content center
        margin-top 40px
.label
    color #080D13
    font-size 12px
    font-weight 400
    line-height: 18px
    letter-spacing 0em
    margin-bottom 10px
.field
    display flex
    justify-content center
    flex-direction column
    +mediaQuery768()
        flex-direction row
.input  
    background #F5F5F6
    border-radius 8px
    color rgba(8, 13, 19, 0.35)
    font-weight 400
    font-size 14px
    line-height 120%
    letter-spacing -0.02em
    border none
    cursor pointer
    height 48px
    padding 0 16px
    +mediaQuery768()
        width 348px
    +mediaQuery1024()
        font-size 16px
        height 60px
        padding 0 26px
.button
    margin-top 25px
    +mediaQuery768()
        margin-top 0
        margin-left 20px
</style>