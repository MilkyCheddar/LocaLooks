import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

axios.defaults.withCredentials = true;

class LocalooksDataSource {
  static async getAllProductsData() {
    const response = await fetch(API_ENDPOINT.ALL_PRODUCT);
    const responseJson = await response.json();
    const product = await responseJson.data;
    return product;
  }

  static async getDetailAllProducts(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_PRODUCT(id));
    return response.json();
  }
}

export default LocalooksDataSource;
