import locaLooksDb from '../../data/locaLooks-source';
import homeBrand from '../templates/home-creator';

const Home = {
  async render() {
    return `
    
      `;
  },

  async afterRender() {
    const allBrands = await locaLooksDb.getBrands();
    const mainContentsHome = document.querySelector('.content-inner');
    allBrands.forEach((item) => {
      mainContentsHome.insertAdjacentHTML('beforeend', homeBrand(item));
    });
  },
};

export default Home;
