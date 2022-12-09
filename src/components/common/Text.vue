<template lang="pug">
div(:class="$style['text-wrap']")
    div(v-if="data.title" :class="$style.title" v-html="data.title")
    div(:class="$style.desc" v-html="data.desc")
    List(
        v-if="data.items"
        :data="data.items"
        :type="data.type"
    )
</template>
    
<script lang="ts">
import List from './List.vue'
    
export default {
    props: {  
        data: {
          type: Object,
          required: true
        },
    },
    components: {
        List
    }
}
</script>
    
<style lang="stylus" module>
.text-wrap
    display flex
    flex-direction column
    justify-content center 
    +mediaQuery1024()
      width 436px
    +mediaQuery1440()
      width 100%
.title
    margin 0 0 15px
    font-weight 700
    font-size 22px
    line-height 120%
    +mediaQuery768()
      font-size 24px 
    +mediaQuery1024() 
      font-size 30px   
.desc
    font-weight 400
    font-size 14px
    line-height 150%
    color rgba(8, 13, 19, 0.65)
    margin-bottom 31px
    +mediaQuery768()
      font-size 16px
    +mediaQuery1024()
      font-size 14px  
</style>
