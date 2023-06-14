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

        <div class="container">
          <article class="post-item">
            <img src="https://cms.sepatucompass.com/images/productdetail/82fee0dd9cb3f8a4fdb775287069dc9873b5fa42.png" class="picture" alt="Compass">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Compass</h1>
                <h2 class="post-item__name">Name : Compass Gazelle Low Black White</h2>
                <h3 class="post-item__type">Type : Shoes</h3>
                <p class="post-item__description">Description : The original silhouette of Compass that started it all in 1998. Re-designed to combine classic vintage with modern details, the Gazelle Low is your ideal every day footwear.</p>
              </div>
          </article>
        </div>
        
        <div class="container">
          <article class="post-item">
            <img src="https://cms.sepatucompass.com/images/productdetail/4a94777eee55eacffb593e2b011c0d5460f40eef.png" class="picture" alt="Compass">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Compass</h1>
                <h2 class="post-item__name">Name : Compass Flight Jkt Low</h2>
                <h3 class="post-item__type">Type : Shoes</h3>
                <p class="post-item__description">Description : Compass® Retrograde Flight JKT edition is inspired by the jacket worn by air force pilots. Unused army green materials was sourced and repurposed to create an authentic and fresh take on an iconic military look.</p>
              </div>
          </article>
        </div>

        <div class="container">
          <article class="post-item">
            <img src="https://cms.sepatucompass.com/images/productdetail/6ebd14afe7e78277b8cba83cc1c4c1c1f212e118.png" class="picture" alt="Compass">
              <div class="post-item__content">
                <h1 class="post-item__products">Products : Compass</h1>
                <h2 class="post-item__name">Name : Compass Gazelle Low Black Gum</h2>
                <h3 class="post-item__type">Type : Shoes</h3>
                <p class="post-item__description">Description : The original silhouette of Compass that started it all in 1998. Re-designed to combine classic vintage with modern details, the Gazelle Low is your ideal every day footwear.</p>
              </div>
          </article>
        </div>
      </section>
      `;
    }
  }
  
  customElements.define('brands-detail', BrandsDetail);
  