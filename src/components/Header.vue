<template lang="pug">
header(:class="$style.header")
  div(:class="$style.container")
    div(:class="$style.mainTitle")
      IconsVue(:data="data.logo")
      div(:class="$style.title" v-html="data.title")
    div(:class="$style.InfoTel")
      IconsVue(:data="data.telIcon")
      div(:class="$style.desc"  v-html="data.tel")
</template>

<script lang="ts">
import IconsVue from './common/Icons.vue';
export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components: {
    IconsVue
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
  padding 0 16px
  +mediaQuery1024()
        padding 0 30px
    +mediaQuery1440()
        padding 0 120px

.mainTitle
  display flex
  align-items center
  font-size 15px
  font-weight 700
  line-height 150%
.title
  margin-left 8.3px

.InfoTel
  display flex
  align-items center

.desc
  display none
  +mediaQuery768()
    display block
    margin-left 18px
    font-weight 700
    font-size 16px
    line-height 125%
</style>
