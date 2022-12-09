<template lang="pug">
div(:class="$style.form")
    FormHeader(:data="data")
    FormField(:data="data")
    FormDescription
</template>

<script lang="ts">

import FormHeader from './FormHeader.vue';
import FormField from './FormField.vue';
import FormDescription from './FormDescription.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    FormHeader,
    FormField,
    FormDescription
  }
}
</script>
<style lang="stylus" module>
.form
    padding 20px
    +mediaQuery768()
        padding 50px
    +mediaQuery1024()
        padding 70px

</style>
