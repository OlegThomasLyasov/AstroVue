import vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { phoneNumberMaskedValidator, nameValidator } from './rules';
import { ru } from './locale';

const vue3 = vue.createApp({});
/* Connect Vee-Validate globally */
vue3.component('ValidationProvider', ValidationProvider);
vue3.component('ValidationObserver', ValidationObserver);

/* Define default validation rules */
extend('required', required);
extend('email', email);

/* Define custom validation rules */
extend('phoneNumberMasked', phoneNumberMaskedValidator);
extend('name', nameValidator);

/* Define localization dictionary */
localize('ru', ru);
