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
            <img src="images/Erigo-Short-Shirt-Jazlyn-Black.webp" class="picture" alt="Erigo">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Erigo</h1>
                <h2 class="post-item__name">Name : Erigo Short Shirt Jazlyn Black</h2>
                <h3 class="post-item__type">Type : Shirt</h3>
                <p class="post-item__description">Description : Motive Shirt Erigo ini menjadi memukau karena polanya yang dicetak dengan kombinasi warna yang menarik. Bagi Anda yang menyukai gaya edgy, ini adalah item yang harus dimiliki!</p>
              </div>
          </article>
        </div>

        <div class="container">
          <article class="post-item">
            <img src="images/Erigo-CoachJacket-Your-Mind-Black.webp" class="picture" alt="Erigo">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Erigo</h1>
                <h2 class="post-item__name">Name : Erigo Coach Jacket Your Mind Black</h2>
                <h3 class="post-item__type">Type : Jacket</h3>
                <p class="post-item__description">Description : The Coach Jacket by Erigo features a unique printed design on the sleeves and back, with stunning colors that will make you feel energized</p>
              </div>
          </article>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  