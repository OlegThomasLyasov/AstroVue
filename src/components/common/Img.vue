<template lang="pug">
picture(:class="$style.picture")
  source(
    v-if="source"
    v-for="(item, index) in source"
    :key="index"
    v-bind="item"
  )
  img(
    :class="$style.image"
    v-bind="options"
  )
</template>

<script lang="ts">
export default {
  props: {  
    source: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
  },
  mounted() {
    document.addEventListener('lazybeforeunveil', (e: any) => {
      const bg = e.target.getAttribute('data-bg');
      if (bg) {
        e.target.style.backgroundImage = `url(${JSON.stringify(bg)})`;
      }
    });
  },
}
</script>

<style lang="stylus" module>
.picture
  display flex
  align-items center
  justify-content center
.image
  display block
  object-fit var(--fs-img-object-fit, contain)
  height var(--fs-img-height, auto)
  object-position var(--fs-img-object-position, center)
  border-radius var(--img-border-radius, unset)
  &:global(.lazy)
    &:not([src])
      visibility hidden
</style>
