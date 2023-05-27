import UrlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantdb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetail } from '../templates/restaurant-creator';

const Detail = {
  async render() {
    const removeHero = document.querySelector('.hero');
    removeHero.style.display = 'none';
    return `
        <div id="catalogs-detail"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantDbSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#catalogs-detail');
    restaurantsContainer.innerHTML = createRestaurantDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
