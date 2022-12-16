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
  font-size 2.2rem
  line-height 2.64rem
  margin-bottom 2rem
  font-weight 700
  letter-spacing -0.02em
  text-align center
  +mediaQuery768()
    font-size 2.4rem
    line-height 2.9rem

.description
  text-align center
  color rgba(#080D13, 0.65)
  font-size 1.4rem
  font-weight 400
  line-height 2.1rem
  letter-spacing -0.02em
  +mediaQuery768()
    font-size 1.8rem
    line-height 2.7rem
.notification
  position absolute
  bottom 1rem
  width calc(100% - 2rem)
  +mediaQuery768()
    bottom 1.5rem
</style>
