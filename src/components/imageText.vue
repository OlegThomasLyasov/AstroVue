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
    margin 70px 16px 72px
    justify-content space-between
    +mediaQuery768()  
      margin 85px 50px 87px
    +mediaQuery1024()
      flex-direction row
      margin 95px 60px 118px
    +mediaQuery1440()
      margin 146px 222px
.image-wrap
    margin-bottom 30px
    +mediaQuery768()
      margin-bottom 53px
    +mediaQuery1024()
      margin 0

</style>