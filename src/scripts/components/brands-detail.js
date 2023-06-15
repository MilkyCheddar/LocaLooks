class BrandsDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML =  `
      <section>
        <div class="container">
          <div class="lg:w-4/5 mx auto flex flex-wrap">
            <img alt="products" class="lg:w-1/2 w-full shadow-md h-auto object-cover object-center rounded" src="${this._product.url}"></img>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-2x1 md:text-3x1 title-font font-semibold mb-1">${this._product.brandName}</h1>
                <p class="leading-relaxed">${this._product.description}</p>
                <div class="flex mt-6 items-center border-2 border-gray-100 mb-5">
                </div>
              </div>
          </div>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  