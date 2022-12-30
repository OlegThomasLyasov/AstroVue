<template lang="pug">
div(:class="$style.group")
  div(:class="$style.label") Номер телефона
  Form(
      @submit="submitForm"
      )
    div(:class="$style.field")
      Field(
          v-show="!loading"
          placeholder="+7"
          v-maska="'+7 (###) ###-##-##'"
          type="tel"
          v-model="phone"
          name="phoneNumberMasked"
          ref="form"
          @focus="onInputFocus"
          @blur="phoneBlur"
          :rules="validatePhone"
          :class="[$style.input, errors[1] && $style['input-error']]"
        )  
      Button(v-show="!loading" :text="data.button.text" :class="[$style.button]" ref="submit")
    ErrorMessage(name="phoneNumberMasked" :class="$style.error")
  FieldCircleLoader(v-show="loading" :class="[$style.loader, $style.input]" color="blue")
</template>

<script lang="ts">
import Button from '../Button.vue';
import { cityCodes8xxAllowed, cityCodesFirstNumberAllowed } from './data';
import FieldCircleLoader from './FieldCircleLoader-v2.vue';
import SendApi from '@modulbank/sendapi';
import ddmEvent from './ddm';

const apiUrls = {
  url: '/crmlandingapi/productRequests',
  botUrl: 'https://bot1.modulbank.ru/bg',
  searchUrl: '/api/liveSearch',
  authUrl: '/api/v2/auth/landing/startRegistration',
  mdConfirmOwnUrl: '/api/confirmOwning',
  mdSetOgrnUrl: '/api/setOgrn',
};
const api = SendApi(apiUrls);

interface IContext {
  phone: string;
  isComplete: boolean;
  applicationType: string;
  websitePlacement?: object;
};

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  },
  components: {
    Button,
    FieldCircleLoader
  },
  data() {
    return {
      phone: '',
      errors: [],
      productId: "RKO",
      loading: false
    }
  },
  methods: {
    
    getData (isComplete = false, blur = false): any {
      const ctx: IContext = {
        phone: this.phone,
        isComplete,
        applicationType: 'callback_request',
      };
      //if (blur) ctx.websitePlacement = { form: 'modulbank.ru', trigger: 'phone_capture_out_of_focus' };
      const preparedData = api.preparedData('callback', ctx, this.productId);
      return preparedData;
    },

    submitForm() {
      this.loading = true; 
      //обработать номер
      const data = this.getData(false);
      api.sendCallback(data).then(() => {
            this.$emit('formSendSuccess'); 
            const ddm = {
              name: 'Telephone Sent In Callback Form',
              category: 'user lead',
              action: 'callback form: tel submit',
              element: this.$refs.submit.$el.classList,
              productId: "RKO",
            };            
            //отправка ddm, надеюсь работает
            ddmEvent(ddm);
          })
          .catch((err: Error) => {
            console.error(err);
          })
          .finally(() => {
            this.loading = false;
          }); 
      },

    validatePhone(value: string) {
      // проверка на пустое поле
      if (!value) {
        this.errors.push('Телефон обязателен для заполнения');
        return 'Телефон обязателен для заполнения';
      }
      // проверка на регулярное выражение
      const regex = new RegExp('^\\+\\d{1,2}\\s+?\\(\\d{3,5}\\)\\s+?\\d{1,3}-\\d{2}-\\d{2}$'); // выражение
      if (!regex.test(value)) {
        this.errors.push('Телефон обязателен для заполнения');
        return 'Телефон заполнен не верно';
      }
      const phoneNumberCleaned: string = value.replace(/[ \-()_]/g, '');
      const cityCode: number = +phoneNumberCleaned.slice(2, 5);
      const cityCodeFirstNumber: number = +phoneNumberCleaned[2];
      const isCityCodeFirstNumberValid: boolean = cityCodesFirstNumberAllowed.includes(cityCodeFirstNumber);
      const isCityCode8xxIsValid: boolean = cityCodes8xxAllowed.includes(cityCode);
      if (!isCityCodeFirstNumberValid) {
        this.errors.push('Код города/оператора должен начинаться с цифры 3, 4, 8, 9');
        return 'Код города/оператора должен начинаться с цифры 3, 4, 8, 9'; 
      }
      // Logic: https://jira.modulbank.ru/browse/SM-3219
      if (cityCodeFirstNumber === 8 && !isCityCode8xxIsValid) {
        this.errors.push('Код города/оператора заполнен не верно');
        return 'Код города/оператора заполнен не верно';
      }
      //очищаем ошибки
      this.errors=[];
      // All is good
      return true;
    },

    onInputFocus() {
      if ( this.phone.length <= 4 )
        this.phone = '+7 ';
    },
    phoneBlur () {
      if (this.phone.length < 5) return;
      this.$refs.form.validate();
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
.loader
  display flex
  align-items center
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
.button
    margin-top 25px
    +mediaQuery768()
        margin-top 0
        margin-left 20px
.error
  color #CF4545
  text-align left
  margin-top 10px
  display block
  font-size 12px
  line-height 15px
  transition opacity 0.2s ease-in-out
</style>