class BrandsDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML =  `
      <section>
        <div class="container">
          <article class="post-item">
            <img src="images/ErigoT-ShirtOversizeAntelopeBlack.webp" class="picture" alt="Erigo">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Erigo</h1>
                <h2 class="post-item__name">Name : Erigo T-Shirt Oversize Antelope Black</h2>
                <h3 class="post-item__type">Type : Shirt</h3>
                <p class="post-item__description">Description : The HD Oversize Erigo T-Shirt is currently the best choice for achieving a stylish look with high-quality products and a wide range of color options.</p>
              </div>
          </article>
        </div>
        
        <div class="container">
          <article class="post-item">
            <img src="images/ErigoT-ShirtOversizeAntelopeBlack.webp" class="picture" alt="Erigo">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Erigo</h1>
                <h2 class="post-item__name">Name : Erigo T-Shirt Oversize Antelope Black</h2>
                <h3 class="post-item__type">Type : Shirt</h3>
                <p class="post-item__description">Description : The HD Oversize Erigo T-Shirt is currently the best choice for achieving a stylish look with high-quality products and a wide range of color options.</p>
              </div>
          </article>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  