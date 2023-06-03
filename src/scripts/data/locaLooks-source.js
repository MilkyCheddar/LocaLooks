import API_ENDPOINT from '../globals/api-endpoint';

class LocaLooksDb {
  static async getBrands() {
    const response = await fetch(API_ENDPOINT.LIST);
    const { data } = await response.json();
    return data.brands;
  }

  static async detailBrands(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const { data } = await response.json();
    return data.brand;
  }
}

export default LocaLooksDb;