<template lang="pug">
div(:class="$style.wrapper" v-once)
  FirstScreenText(:data="FirstInfo")
  div(:class="$style['image-wrap']")
    Img(:options="FirstInfo.image" :source="FirstInfo.source" :Islazy="true")
</template>

<script lang="ts">
import Img from './common/Img.vue';
import FirstScreenText from './common/FirstScreenText.vue';


export default {
  props: {  
    FirstInfo: {
      type: Object,
      required: true
    },
  },
  components:{
    Img,
    FirstScreenText
  },
}
</script>

<style lang="stylus" module>

.wrapper
  background linear-gradient(276.85deg, #DFDFDF 0%, #EDEDED 100%)
  border-radius 1.2rem
  display flex
  justify-content space-between
  height auto 
  +mediaQuery1024()
    margin 60px 30px 135px 30px
  +mediaQuery1440()
    margin 60px 120px 135px 120px
.image-wrap 
  margin auto auto
</style>
