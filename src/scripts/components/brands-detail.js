class BrandsDetail extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
    }
  
    render() {
      this.innerHTML =  `
      <section>
        <h2 class="brands_name">${this._productName}</h2>
        <img class="brands_image"> src="${this._product.image_url}" alt="brands_name" />
        <div class="brands_info">
            <h3>Information</h3>
            <div class="category">
                <h4>Kategori</h4>
                <p>${this._product.category}</p>
            </div>
            <div id="catalogs">
                <div class="brands">
                    <h4>Shop Now</h4>
                    <p>${this._product.web_url}</p>
                </div>
            </div>
            <h4>Description</h4>
            <p>${this._product.description}</p>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  