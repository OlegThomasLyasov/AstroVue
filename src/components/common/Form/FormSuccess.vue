<template lang="pug">
div(:class="$style['form-success']")
  div(:class="$style.icon")
    IconsVue(data="form-success")
  div(:class="$style.title") Заявку получили
  div(:class="$style.description") Скоро перезвоним, не убирайте далеко телефон
</template>

<script lang="ts">
import IconsVue from '../Icons.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: false
    },
  },
  components: {
    IconsVue
  },
}
</script>

<style lang="stylus" module>
.form-success
  display flex
  height 100%
  flex-direction column
  justify-content center
  align-items center
  color #080D13

.icon
  display flex
  margin-bottom 1rem

.title
  font-size 22px
  line-height 26.4px
  margin-bottom 20px
  font-weight 700
  letter-spacing -0.02em
  text-align center
  +mediaQuery768()
    font-size 24px
    line-height 29px

.description
  text-align center
  color rgba(#080D13, 0.65)
  font-size 14px
  font-weight 400
  line-height 21px
  letter-spacing -0.02em
  +mediaQuery768()
    font-size 18px
    line-height 27px
.notification
  position absolute
  bottom 10rem
  width calc(100% - 20rem)
  +mediaQuery768()
    bottom 15px
</style>
