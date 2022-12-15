<template lang="pug">
ValidationProvider(
  :name="name"
  :rules="rules"
  :debounce="debounce"
  :mode="mode"
)
div(:class="$style.group")
  div(:class="$style.label") Номер телефона
  ValidationProvider(
            v-show="!loading"
            ref="phoneNumberMasked"
            name="phoneNumberMasked"
            rules="required|phoneNumberMasked"
            mode="lazy"
            tag="div"
            :debounce="200"
          )
    div(slot-scope='{ errors }' :class="wrapClass(errors[0])")
      div(:class="$style.field")
        input(
          v-show="!loading"
          placeholder="+7"
          v-maska="'+7 (###) ###-##-##'"
          type="tel"
          v-model="phone"
          ref="input"
          name="phoneNumberMasked"
          @blur="phoneBlur"
          @focus="onInputFocus"
          :class="[$style.input, errors[0] && $style['input-error']]"
          )
        Button(:text="data.button.text" :class="$style.button" @click="submitForm")
      div(v-if="errors[0]" :class="{[$style.visible]: errors[0], [$style.info]: true, [$style.error]: true }" v-html="errors[0]")
</template>

<script lang="ts">
import Button from '../Button.vue';
import { ValidationObserver } from 'vee-validate';

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  },
  components: {
    Button,
    ValidationObserver
  },
  data() {
    return {
      phone: '',
      errors: [],
      loading: false
    }
  },
  methods: {
    phoneBlur(): void {
      if (this.phone.length < 5) return;
      
    },
    onInputFocus() {
      const { input } = this.$refs;
      if (input.value.length <= 4) {
        this.phone = '+7 (';
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
      }
    }
  },
  created() {
    this.$watch('phone', (newVal: string) => {
      if (/8[0-9]{10}/.test(newVal)) this.phone = newVal.slice(1);
    })
  }
}
</script>

<style lang="stylus" module>
.group
    display flex
    flex-direction column
    margin-top 20px
    +mediaQuery768()
        flex-wrap wrap
        justify-content center
        align-content center
        margin-top 40px
.label
    color #080D13
    font-size 12px
    font-weight 400
    line-height: 18px
    letter-spacing 0em
    margin-bottom 10px
.field
    display flex
    justify-content center
    flex-direction column
    +mediaQuery768()
        flex-direction row
.input  
    background #F5F5F6
    border-radius 8px
    font-weight 400
    font-size 14px
    line-height 120%
    border 1px solid #f5f5f6
    letter-spacing -0.02em
    height 48px
    padding 0 16px
    &::placeholder
      color rgba(8, 13, 19, 0.35)
    &:focus
      border 1px solid #F5F5F6
    +mediaQuery768()
        width 348px
    +mediaQuery1024()
        font-size 16px
        height 60px
        padding 0 26px
.input-error
    border-color #F24F4F
    background #FFE3E3
.button
    margin-top 25px
    +mediaQuery768()
        margin-top 0
        margin-left 20px
.info
  margin-top 10px
  display block
  font-size 12px
  line-height 15px
  transition opacity 0.2s ease-in-out
  opacity 0
.error
  color #CF4545
  text-align left
.visible
  opacity 1
</style>