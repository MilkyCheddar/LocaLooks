import UrlParser from '../../routes/url-parser';
// import products from '../../data/products-data.json';

const BrandProducts = {
  async render() {
    return /* html */`
      <brands-detail></brands-detail>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

  },
};

export default BrandProducts;
