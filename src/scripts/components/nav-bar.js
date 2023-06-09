class NavigationBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = /* html */ `
      <header>
      <button id="skip-to-content" tabindex="1" class="skip-to-content" href="#explore">
        Skip To Content
      </button>
      <div class="headerInner">
          <img src="images/icon-small.png" class="headerLogo" alt="">
        <button id="menu" class="headerMenu" hidden href="#drawer.open">☰</button>  <nav id="drawer" class="nav">
      <ul class="navbar">
        <li class="navItem"><a href="/">Home</a></li>
        <li class="navItem"><a href="#/brands-catalogue">Brands</a></li>
        <li class="navItem"><a href="#/brands-detail">Detail</a></li>
        <li class="navItem"><a href="#/about-us">About Us</a></li>
      </ul>
      </nav>
    </div>
    </header>
      `;
    }
  }
  
  customElements.define('navigation-bar', NavigationBar);
  