<template lang="pug">
div(v-once)
    ul(:class="$style.ul")
       li(v-for="(item, index) in data" 
       :class="$style.li"
       v-html="item"
       :key="index"
       )
</template>


<script lang="ts">

export default {
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
}

</script>

<style lang="stylus" module>
.item
  padding-top 20px
  padding-bottom 20px
.ul
  list-style-type none
  padding 0
  margin 0
.li
  font-size 14px
  line-height 175%
  margin 0 0 15px
  padding 0 0 0 39px
  font-weight 400
  color #080D13A6
.ul .li {
  background-image: url(/src/assets/images/icons/Marker.png)
  background-position: 0 0
  background-size: 24px 24px
  background-repeat: no-repeat
}  
</style>