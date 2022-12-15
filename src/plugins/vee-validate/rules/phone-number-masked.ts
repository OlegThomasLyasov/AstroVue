import { ValidationRule } from 'vee-validate/dist/types/types';
import { cityCodes8xxAllowed, cityCodesFirstNumberAllowed } from './data';

/*
 ** "phoneNumberMasked" rule custom validator
 ** maked for ~/components/common/InputTel.vue component
 */

const enum ErrorReasons {
  'PHONE_NUMBER_NOT_VALID',
  'PHONE_NUMBER_CITY_CODE_FIRST_NUMBER_NOT_VALID',
  'PHONE_NUMBER_CITY_CODE_NOT_VALID',
}

export const phoneNumberMaskedValidator: ValidationRule = {
  validate: (phoneNumber) => {
    const phoneNumberMaskedRegExp = new RegExp('^\\+\\d{1,2}\\s+?\\(\\d{3,5}\\)\\s+?\\d{1,3}-\\d{2}-\\d{2}$'); // RegExp for input mask

    /* Test field value with RegExp */
    if (!phoneNumberMaskedRegExp.test(phoneNumber)) {
      return {
        valid: false,
        data: {
          reason: ErrorReasons.PHONE_NUMBER_NOT_VALID,
        },
      };
    }

    const phoneNumberCleaned: string = phoneNumber.replace(/[ \-()_]/g, '');
    const cityCode: number = +phoneNumberCleaned.slice(2, 5);
    const cityCodeFirstNumber: number = +phoneNumberCleaned[2];
    const isCityCodeFirstNumberValid: boolean = cityCodesFirstNumberAllowed.includes(cityCodeFirstNumber);
    const isCityCode8xxIsValid: boolean = cityCodes8xxAllowed.includes(cityCode);

    // Logic: https://jira.modulbank.ru/browse/SM-3219
    if (!isCityCodeFirstNumberValid) {
      return {
        valid: false,
        data: {
          reason: ErrorReasons.PHONE_NUMBER_CITY_CODE_FIRST_NUMBER_NOT_VALID,
        },
      };
    }

    // Logic: https://jira.modulbank.ru/browse/SM-3219
    if (cityCodeFirstNumber === 8 && !isCityCode8xxIsValid) {
      return {
        valid: false,
        data: {
          reason: ErrorReasons.PHONE_NUMBER_CITY_CODE_NOT_VALID,
        },
      };
    }

    return true;
  },
  message: (_field, values) => {
    // TODO: в версии 3.2.1 values.reason = undefined
    if (values && values.reason === ErrorReasons.PHONE_NUMBER_NOT_VALID) {
      return 'Телефон заполнен не верно';
    }

    if (values && values.reason === ErrorReasons.PHONE_NUMBER_CITY_CODE_FIRST_NUMBER_NOT_VALID) {
      return 'Код города/оператора должен начинаться с цифры 3, 4, 8, 9'; // Если изменить текст ошибки, отвалятся события -> components/common/input/InputInfo.vue
    }

    if (values && values.reason === ErrorReasons.PHONE_NUMBER_CITY_CODE_NOT_VALID) {
      return 'Код города/оператора заполнен не верно';
    }

    return '';
  },
};

export default phoneNumberMaskedValidator;
