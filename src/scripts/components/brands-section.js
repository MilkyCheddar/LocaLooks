/* eslint-disable max-len */
class BrandsSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const cardList = (data) => /* html */`
    <div class="carding grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" tabindex="0">
      <div class="catalogue-image">        
      <a href="#/brands-catalogue/${data.uuid}">
        <img src="${data.image_url}"
          loading="lazy"
          alt="${data.productName}"
        /></a>
      </div>
      <div class="catalogue-content">
        <a class="card-link-button no-underline" href="#/brands-catalogue/${data.uuid}">${data.productName}</a>
      </div>
      <div class="catalogue-head"> <a class="no-underline" href="#/brands-catalogue/${data.uuid}">
        <p class="catalogue-category">Category: ${data.category}</p>
          </a>
        </div>
    </div>
      `;

    this.innerHTML = /* html */ `
          <div class="categories">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center pt-1 mb-1">Our Picks!</h2>
            <div class="py-3 flex flex-col items-center md:flex-row md:justify-between">
              <!-- sorting -->
              <label for="SortBy" class="sr-only"> Sort </label>

              <select
                id="SortBy"
                name="sort_by"
                class="rounded-md border text-sm py-3 px-4 w-[330px] md:w-60"
              >
                <option readOnly>Choose category...</option>
                <option>Sandals</option>
                <option>Shoes</option>
                <option>Shirt</option>
                <option>Outerwear</option>
                <option>Watch</option>
              </select>
            </div>
          </div>
          <div class="cards">
          ${item.map((data) => cardList(data)).reverse().join('')}
            </div>
            `;
    const sorting = this.querySelector('#SortBy');
    sorting.addEventListener('change', () => {
      const filteredCategory = item.filter((data) => data.category === sorting.value);
      const card = document.querySelector('.cards');
      card.innerHTML = filteredCategory.map((data) => cardList(data)).reverse().join('');

      if (sorting.value === 'Choose category...') {
        card.innerHTML = item.map((data) => cardList(data)).reverse().join('');
      }
    });
  }
}

customElements.define('brands-section', BrandsSection);
