const AboutUs = {
  async render() {
    return /* html */ `
      <about-us></about-us>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');
  },
};

export default AboutUs;
