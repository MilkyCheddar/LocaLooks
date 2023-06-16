import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCT: `${CONFIG.BASE_URL}products`,
  DETAIL_PRODUCT: (id) => `${CONFIG.BASE_URL}products/${id}`,
  USERS: `${CONFIG.BASE_URL}users`,
  LOGIN: `${CONFIG.BASE_URL}login`,
  LOGOUT: `${CONFIG.BASE_URL}logout`,
};

export default API_ENDPOINT;
