<template lang="pug">
footer(:class="$style.footer")
    div(:class="$style.container")
        div(:class="$style.mainTitle")
            IconsVue(:data="data.logo")
            div(:class="$style.title" v-html="data.title")
        div(:class="$style.icons")
            div(v-for="(item, index) in data.icons" :key="index" :class="$style.icon")
                IconsVue(:data="item")
</template>

<script lang="ts">
import IconsVue from './common/Icons.vue';
export default {
    props: {  
        data: {
            type: Object,
            required: true
        },
    },
    components: {
        IconsVue
    },
}

</script>
<style lang="stylus" module>
.footer
    background-color #2042AB
    font-weight 700
    color #FFFFFF
    font-size 16px
    line-height 2rem
    flex-basis 100%
    letter-spacing -0.02em

.container
    display flex
    justify-content space-between
    align-items start
    height 138px
    flex-direction column
    padding 20px 0 16px 16px
    +mediaQuery768()
       height 80px
       align-items center
       flex-direction row
       padding 0 30px
    +mediaQuery1440()
      padding 0 120px

.mainTitle
    display flex
    align-items center
    font-size 15px

.title
    margin-left 8.3px

.icons
    display flex
    align-items center
    margin-top 10px
.icon
    cursor pointer
    &:not(:last-child)
        margin-right 10px

</style>
