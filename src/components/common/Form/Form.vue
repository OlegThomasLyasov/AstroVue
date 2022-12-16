<template lang="pug">
div(v-if="!isFormSuccess" :class="$style.form")
    FormHeader(:data="data")
    FormField(:data="data" @formSendSuccess="formSendSuccess")
    FormDescription
FormSuccess(v-else)
</template>

<script lang="ts">

import FormHeader from './FormHeader.vue';
import FormField from './FormField.vue';
import FormDescription from './FormDescription.vue';
import FormSuccess from './FormSuccess.vue';

export default {
  data() {
    return {
      isFormSuccess: false
    }
  },
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    FormHeader,
    FormField,
    FormDescription,
    FormSuccess
  },
  methods: {
    formSendSuccess() {
      this.isFormSuccess = true;
    }
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
