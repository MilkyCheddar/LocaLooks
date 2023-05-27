import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/restaurant-creator';

const Favorite = {
  async render() {
    const removeHero = document.querySelector('.hero');
    removeHero.style.display = 'none';
    return `
        <h1>Favorite Restaurant ⭐</h1>
        <div id="favorite" class="favorite">

        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#favorite');
    restaurants.forEach((item) => {
      restaurantsContainer.innerHTML += createRestaurantItem(item);
    });
  },
};

export default Favorite;
