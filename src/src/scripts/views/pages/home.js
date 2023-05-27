import restaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItem } from '../templates/restaurant-creator';

const HomePages = {
  async render() {
    return `
    <div id="catalogs" class="catalogs"></div>
        `;
  },

  async afterRender() {
    const restaurants = await restaurantDbSource.Home();
    const restaurantsContainer = document.querySelector('#catalogs');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default HomePages;
