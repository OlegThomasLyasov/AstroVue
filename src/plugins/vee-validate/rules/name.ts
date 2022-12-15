/* eslint-disable no-useless-escape */
import { ValidationRule } from 'vee-validate/dist/types/types';

/*
 ** "Name" rule custom validator
 */

const enum ErrorReasons {
  'NAME_IS_NOT_VALID',
}

export const nameValidator: ValidationRule = {
  validate: (name) => {
    // prettier-ignore
    const nameRegExp = new RegExp('^[A-Za-zА-Яа-яЁё ]((\ |\-)?[A-Za-zА-Яа-яЁё ]){0,49}$');

    /* Test field value with RegExp */
    if (!nameRegExp.test(name)) {
      return {
        valid: false,
        data: {
          reason: ErrorReasons.NAME_IS_NOT_VALID,
        },
      };
    }

    return true;
  },
  message: (_field, values) => {
    if (values && values.reason === ErrorReasons.NAME_IS_NOT_VALID) {
      return 'Имя заполнено не верно';
    }

    return '';
  },
};

export default nameValidator;
