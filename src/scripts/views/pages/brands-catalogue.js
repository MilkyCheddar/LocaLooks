import LocalooksDataSource from "../../data/localooks-data";

const BrandList = {
  async render() {
    return /* html */ `
      <brands-section></brands-section>
    `;
  },

  async afterRender() {
    const productListElement = document.querySelector('brands-section');

    const allProduct = (brandList) => {
      productListElement.products = brandList;
    };

    LocalooksDataSource.getAllProductsData().then((data) => {
      allProduct(data);
    });
    

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

  },
};

export default BrandList;
