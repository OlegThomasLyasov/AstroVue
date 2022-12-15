import type { App } from 'vue';
import { maska } from 'maska';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { phoneNumberMaskedValidator, nameValidator } from '../plugins/vee-validate/rules';
import { ru } from '../plugins/vee-validate/locale';

/* Connect Vee-Validate globally */

/* Define default validation rules */
extend('required', required);
extend('email', email);

/* Define custom validation rules */
extend('phoneNumberMasked', phoneNumberMaskedValidator);
extend('name', nameValidator);

/* Define localization dictionary */
localize('ru', ru);

export default (app: App) => {
    app.directive('maska', maska);
    app.component('ValidationProvider', ValidationProvider);
    app.component('ValidationObserver', ValidationObserver);
}