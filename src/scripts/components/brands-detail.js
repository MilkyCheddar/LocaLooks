class BrandsDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML =  `
      <section>
        <h2 class="brand_name">${brands.name}</h2>
        <img class="brand_image"> src="${API_ENDPOINT.BRAND_IMAGE + brand.thumbnail}" alt="${brand.name}" />
        <div class="brand_info">
            <h3>Information</h3>
            <div class = categories>
                <h4>Kategori</h4>
                <p>${brand.categories}</p>
            </div>
            <div id="catalogs">
                <div class="brand">
                    <h4>Katalog</h4>
                    <p>${brand.brands.catalogs.map((brand) => `- ${brand.name}`).join('<br>')}</p>
                    <h5>Type</h5>
                    <p>${brand.brands.type.catalogs.map((brand) => `- ${brand.type.name}`).join('<br>')}</p>
                </div>
            </div>
            <h4>Description</h4>
            <p>${brand.description}</p>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  