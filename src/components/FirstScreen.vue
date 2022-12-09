<template lang="pug">
div(:class="$style.wrapper" v-once)
  FirstScreenText(:data="data")
  div(:class="$style['image-wrap']")
    Img(:options="data.image" :source="data.source" :Islazy="true")
</template>

<script lang="ts">
import Img from './common/Img.vue';
import FirstScreenText from './common/FirstScreenText.vue';


export default {
  props: {  
    data: {
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
  border-radius 15px
  display flex
  justify-content space-between
  height auto
  margin 40px 16px 96px 16px
  flex-direction column 
  +mediaQuery768()
    flex-direction row
    margin 60px 30px 115px 30px
  +mediaQuery1024()
    margin 60px 30px 125px 30px
  +mediaQuery1440()
    margin 60px 120px 165px 120px
.image-wrap 
  margin auto auto
</style>
