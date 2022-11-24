<template lang="pug">
div(:class="$style.wrapper" v-once)
    Text(:data="data")
    div(:class="$style['image-wrap']")
        Img(:options="data.image" :source="data.source")
</template>

<script lang="ts">
import Text from '../common/Text.vue';
import Img from '../common/Img.vue';

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
    padding 0 222px
    display flex
    flex-direction row
    +mediaQuery1024()
      padding 0 30px
    +mediaQuery1440()
      padding 0 120px
.image-wrap
    margin auto auto

</style>