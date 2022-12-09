<template lang="pug">
div(:class="$style.header")
    h2(v-if="data.title" :class="$style.title" v-html="data.title")
    div(v-if="data.description" :class="$style.description" v-html="data.description")
</template>

<script lang="ts">


export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  }
}
</script>
<style lang="stylus" module>
.header
    text-align center
.title
    font-weight 700
    font-size 22px
    line-height 120%
    letter-spacing -0.02em
    color #080D13
    margin-top 0
    +mediaQuery768()
        font-size 24px
    +mediaQuery1024()
        font-size 30px
.description
    font-weight 400
    font-size 14px
    line-height 150%
    letter-spacing -0.02em
    color rgba(8, 13, 19, 0.65)
    +mediaQuery768()
        font-size 16px
    +mediaQuery1024()  
        font-size 18px

</style>