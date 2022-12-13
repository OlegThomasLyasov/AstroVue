<template lang="pug">
div(:class="$style.group")
    div(:class="$style.label") Номер телефона
    div(:class="$style.field")
        input(
              v-show="!loading"
              placeholder="+7"
              v-maska data-maska="#-#"
              type="tel"
              v-model="phone"
              ref="input"
              name="Телефон"
              @blur="phoneBlur"
              @focus="onInputFocus"
              :class="$style.input"
              )
        Button(:text="data.button.text" :class="$style.button" @click="submitForm")
</template>

<script lang="ts">
import Button from '../Button.vue';
import { vMaska } from "maska"

export default {
  directives: { maska: vMaska },
  props: {  
    data: {
      type: Object,
      required: true
    },
  },
  components:{
    Button,
    
  },
  data() {
    return { 
      phone: '',
      error: '',
      loading: false 
    }
  },
  methods: {
    phoneBlur(): void {
      if (this.phone.length < 5) return;
      this.$refs.phoneNumberMasked.validate().then((validInfo: any) => {
        if (validInfo.valid) {
          const data = this.getData(false, true);
          this.$sendCallback(data);
        } else if (
          validInfo.errors.includes('Код города/оператора должен начинаться с цифры 3, 4, 8, 9') &&
          !this.invalidCodeEvent
        ) {
          this.invalidCodeEvent = true;
          this.$ddmSendWrongCode('form-callback');
        }
      });
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
    this.$watch('phone', (newVal: string) =>{
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
    letter-spacing -0.02em
    border none
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
.button
    margin-top 25px
    +mediaQuery768()
        margin-top 0
        margin-left 20px
</style>