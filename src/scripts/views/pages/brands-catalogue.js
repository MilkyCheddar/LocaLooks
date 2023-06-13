const BrandList = {
  async render() {
    return /* html */ `
      <brands-section></brands-section>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

  },
};

export default BrandList;
