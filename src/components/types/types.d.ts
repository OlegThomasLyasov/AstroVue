import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $ddmEvent: any;
    $style: any;
    $sendApi: any;
    $takeParamsForSend: any;
    $global: any;
  }
}
