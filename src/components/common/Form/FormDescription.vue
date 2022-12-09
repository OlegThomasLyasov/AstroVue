<template lang="pug">
div(:class='$style.wrap')
  span(v-html='text')
  br(v-if='breakline')
  a(
    :href='file || "/fs/files/portal_agreement.pdf"'
    :class='$style.link'
    v-html='linkText'
    target='_blank'
  )
</template>

<script lang="ts">
export default {
    data() {
        return { text: 'Оставляя заявку, вы соглашаетесь с',
                 linkText: ' условиями&nbsp;использования&nbsp;сервиса Modulbank', 
                 file: '',
                 breakline: true 
                }
    },
}
</script>

<style lang="stylus" module>
.wrap
  text-align center
  color rgba(8, 13, 19, 0.65)
  font-size 12px
  line-height 150%
  margin-top 20px
  +mediaQuery768()
    margin-top 40px

.link
  color #0057FF
  transition color .2s
  cursor pointer
  text-decoration none
  &:hover
    color #0075FF

</style>