class HeroSection extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = /* html */ `
      <section>
      <div id="mainContentHome" class="mainContentsHome">
          <div class="content-inner">
            <div class="content-item" id="erigoHero">
              <img src="images/ErigoBanner.jpg" class="d-block w-100" alt="ErigoBanner">
            </div>
            <div class="content-item" id="compassHero">
              <img src="images/compassBanner.jpg" alt="ErigoBanner">
            </div>
            <div class="content-item" id="mdHero">
              <img src="images/mdBanner.jpg" class="d-block w-100" alt="mdBanner">
            </div>
          </div>
        </div>
        <div id="explore">
        <h1>Brands of the Day</h1>
        <div id="catalogs" class="catalogs"></div>
      </div>
    </section>
      `;
    }
  }
  
  customElements.define('hero-section', HeroSection);
  