import DATA from '../../public/TEAM.json';

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>TEST SATU DUA TIGA TEST</h2>
    `;
  }
}

customElements.define('about-us', AboutUs);
