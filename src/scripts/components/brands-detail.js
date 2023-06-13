class BrandsDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML =  `
      /* masukin html disini */
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  