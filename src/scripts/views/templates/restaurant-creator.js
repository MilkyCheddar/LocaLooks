import 'regenerator-runtime';
import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurantItem) => `
<div class="r__catalog">
<div class="r__img">
  <img src="${CONFIG.BASE_IMAGE_URL + restaurantItem.pictureId}" alt="${restaurantItem.name}">
</div>
<div class="r__name">
  <p>${restaurantItem.name}</p>
</div>
<div class="r__city">
  <p>City: ${restaurantItem.city}</p>
</div>
<div class="r__desc">
  <p>Description: ${restaurantItem.description.substring(0, 75)}...</p>
</div>
<div class="r__rating">
  <p>⭐: ${restaurantItem.rating}</p>
</div>
<div class="r__button">
  <button onclick="window.location.href='#/detail/${restaurantItem.id}'">Learn More</button>
</div>
</div>
`;

const createRestaurantDetail = (restaurantDetail) => `
<div class="r__detail">
  <div class="r__detailName">
    <h1>${restaurantDetail.name}</h1>
  </div>
  <div class="r__detailImg">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurantDetail.pictureId}" alt="${restaurantDetail.name}">
  </div>
  <div class="r__detailInfo">
  <div class="r__detailDesc">
    <h2>City: ${restaurantDetail.city}</h2>
    <h2>⭐: ${restaurantDetail.rating}</h2>
    <h2>Description: ${restaurantDetail.description}</h2>
  </div>
  <div class="menu">
  <div class="menu-food">
    <h2>Food List:</h2>
    <ul class="food-list"></ul>${restaurantDetail.menus.foods
    .map(
      (food) => `
                  <li>${food.name}</li>
                  `,
    )
    .join('')}
              </ul>
          </div> 
          <br>
          <div class="menu-drink">
          <h2>Beverage List:</h2>
              <ul class="beverage-list">
              ${restaurantDetail.menus.drinks
    .map(
      (drink) => `
                  <li>${drink.name}</li>
                  `,
    )
    .join('')}
              </ul>
    </div>
  </div>
  <div class="reviews">
  <h2>Review:</h2>
  <div class="review-list">
  ${restaurantDetail.customerReviews
    .map(
      (review) => `
  <div class="review-item">
    <p class="review-item-user">${review.name}: ${review.review} (${review.date})</p>
    <br>
  </div>`,
    )
    .join('')}
</div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetail,
  createRestaurantItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
