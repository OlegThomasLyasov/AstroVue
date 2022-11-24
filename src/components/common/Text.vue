<template lang="pug">
div(:class="$style['text-wrap']")
    div(v-if="data.title" :class="$style.title" v-html="data.title")
    div(:class="$style.desc" v-html="data.desc")
    List(
        v-if="data.items"
        :data="data.items"
    )
</template>
    
<script lang="ts">
import List from './List.vue'
    
export default {
    props: {  
        data: {
          type: Object,
          required: true
        },
    },
    components: {
        List
    }
}
</script>
    
<style lang="stylus" module>
.text-wrap
    display flex
    flex-direction column
    padding 30px 0rem 30px 30px
.title
    margin 0 0 20px
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
.desc
    font-weight 400
    font-size 1.4rem
    line-height 150%
    color rgba(8, 13, 19, 0.65)
    margin-bottom 31px
</style>
