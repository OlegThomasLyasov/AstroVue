<template lang="pug">
header(:class="$style.header")
  div(:class="$style.container")
    div(:class="$style.mainTitle")
      img(:src="data.logo" alt="")
      div(:class="$style.title" v-html="data.title")
    div(:class="$style.InfoTel")
      img(:src="data.telLogo" alt="")
      div(:class="$style.desc"  v-html="data.tel")
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
  background-color #2042AB
  font-weight 700
  color #FFFFFF
  font-size 16px
  line-height 2rem
  flex-basis 100%
  letter-spacing -0.02em

.container
  display flex
  justify-content space-between
  align-items center
  height: 60px
  +mediaQuery1024()
        padding 0 30px
    +mediaQuery1440()
        padding 0 120px

.mainTitle
  display flex
  align-items center
  font-size 15px

.title
  margin-left 8.3px

.InfoTel
  display flex
  align-items center

.desc
  margin-left 18px

</style>
