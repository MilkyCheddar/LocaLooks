class BrandsDetail extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }
  
    render() {
      this.innerHTML =  `
      <section>
        <h2 class="brands_name">${this._product.productName}</h2>
        <div class="brands-detail">
        <img src="${this._product.image_url}"
          class="brands_image"
          alt="${this._product.productName}"
        />
        <div class="brands_info">
          <h3>Information</h3>
          <div class="category">
            <h4 class"inline">Category:</h4>
            <p class="inline">${this._product.category}</p>
          </div>
          <div id="catalogs">
          <div class="brands">
          <button class="shop-now-button"><a class="no-underline" href="${this._product.web_url}" target="_blank">Shop Now</a></button>
      </div>
          </div>
          <div class="brands_description">
            <h4>Description</h4>
            <p>${this._product.description}</p>
          </div>
        </div>
      </div>  
      </section>
    `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  