import homeBrand from '../templates/home-creator';

const Home = {
  async render() {
    return /* html */ `
      <brandPick></brandPick>
    `;
  },

  async afterRender() {
    let picks = ['Erigo', 'Compass', 'Hijack Sandals', 'Maternal Disaster', 'Lanccelot'];

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');
    const brandPicks = document.querySelector('brandPick');
    
    for (let i = 0; i < picks.length; i++) {
      const brandPickElement = picks[i];
      const brandPick = homeBrand(brandPickElement);
      brandPicks.innerHTML += brandPick;
    }    
  },
};

export default Home;
