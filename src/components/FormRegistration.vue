<template lang="pug">
div(:class="$style['form-wrapper']")
  Form(:data="data")
</template>

<script lang="ts">

import Form from './common/Form/Form.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    Form
  }
}
</script>

<style lang="stylus" module>
.form-wrapper
  background: #FFFFFF
  box-shadow: 0px 4px 15px rgba(8, 13, 19, 0.03)
  border-radius: 10px
  display flex
  justify-content space-between
  margin 0 16px 70px
  flex-direction column 
  +mediaQuery768()
    margin 0 30px 85px
  +mediaQuery1024()
    margin 0 113px 95px
  +mediaQuery1440()
    margin 0 325px 135px
</style>
