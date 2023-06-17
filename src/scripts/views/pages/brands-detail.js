import LocalooksDataSource from '../../data/localooks-data';
import UrlParser from '../../routes/url-parser';

const BrandProducts = {
  async render() {
    return /* html */`
      <brands-detail></brands-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;

    const detailElement = document.querySelector('brands-detail');
    const detailProduct = (productById) => {
      detailElement.products = productById;
    };

    LocalooksDataSource.getDetailAllProducts(id).then((product) => {
      detailProduct(product.data);
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');
  },
};

export default BrandProducts;
