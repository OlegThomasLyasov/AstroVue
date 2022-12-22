import SendApi from '@modulbank/sendapi';
import { inject } from 'vue';

const apiUrls = {
  url: '/crmlandingapi/productRequests',
  botUrl: 'https://bot1.modulbank.ru/bg',
  searchUrl: '/api/liveSearch',
  authUrl: '/api/v2/auth/landing/startRegistration',
  mdConfirmOwnUrl: '/api/confirmOwning',
  mdSetOgrnUrl: '/api/setOgrn',
};

const api = SendApi(apiUrls);

const SendApiPlugin = () => {
  inject('sendApi', api.sendCallback);
  inject('takeParamsForSend', api.preparedData);
};

export default SendApiPlugin;
