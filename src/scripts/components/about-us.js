import DATA from '../../public/TEAM.json';

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML =  `
    /* masukin html disini */
    `;
  }
}

customElements.define('about-us', AboutUs);
