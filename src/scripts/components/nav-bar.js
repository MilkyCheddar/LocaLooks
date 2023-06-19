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
        <a href="#/home"><img src="images/icon-small.png" class="headerLogo" alt="logo"></a>
        <button id="menu" class="headerMenu" href="#drawer.open">☰</button>  
        <nav class="nav" id="nav">
          <ul class="navbar">
            <li class="navItem"><a href="/">Home</a></li>
            <li class="navItem"><a href="#/brands-catalogue">Catalogue</a></li>
            <li class="navItem"><a href="#/about-us">About Us</a></li>
          </ul>
        </nav>
      </div>
      <div id="drawer">
        <ul>
          <li class="drawerItem"><a href="/">Home</a></li>
          <li class="drawerItem"><a href="#/brands-catalogue">Catalogue</a></li>
          <li class="drawerItem"><a href="#/about-us">About Us</a></li>
        </ul>
      </div>
    </header>
      `;
  }
}

customElements.define('navigation-bar', NavigationBar);
