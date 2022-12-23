import { App } from 'vue';
import { maska } from 'maska';
import { defineRule, configure, Form, Field, ErrorMessage } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { ru } from '../plugins/vee-validate/locale';

declare global {
    interface Window {
      digitalData: any;
    }
  }
/* Define custom validation rules */
defineRule('required',required);

/* Define localization dictionary */
configure ({
    generateMessage: localize('ru', ru)
});

export default (app: App) => {
    //глобальные переменные
    app.config.globalProperties.$ddmEvent;
    app.config.globalProperties.$takeParamsForSend;
    //директивы
    app.directive('maska', maska);

    /* Connect Vee-Validate globally */
    app.component('Form', Form);
    app.component('Field', Field);
    app.component('ErrorMessage', ErrorMessage);
    //app.use(SendApiPlugin);
}