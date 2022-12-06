<template lang="pug">
div(v-once)
    ul(:class="$style.ul")
       ListItemVue(v-for="(item, index) in data"
        :class="$style.item" 
        :data="item"
        :index="index"
        :type="type"
        :key="index")
</template>


<script lang="ts">
import ListItemVue from './ListItem.vue';

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false
    }
  },
  components: {
    ListItemVue
  }
}

</script>

<style lang="stylus" module>

.ul
  list-style-type none
  padding 0
  margin 0
   
</style>