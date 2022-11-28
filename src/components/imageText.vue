<template lang="pug">
div(:class="$style.wrapper" v-once)
    Text(:data="data")
    div(:class="$style['image-wrap']")
        Img(:options="data.image" :source="data.source")
</template>

<script lang="ts">
import Text from './common/Text.vue';
import Img from './common/Img.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    Text,
    Img
  },
}
</script>

<style lang="stylus" module>
.wrapper
    display flex
    flex-direction column-reverse
    +mediaQuery1024()
      flex-direction row
      padding 0 60px
    +mediaQuery1440()
      padding 0 222px
.image-wrap
    margin-bottom 30px
    +mediaQuery768()
      margin-bottom 53px
    +mediaQuery1024()
      margin 0

</style>