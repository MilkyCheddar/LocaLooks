const Home = {
    async render() {
      return /* html */`
        <home-page></home-page>
      `;
    },
  
    async afterRender() {
      const navbar = document.querySelector('navigation-bar');
      navbar.classList.remove('hidden');
    },
  };
  
  export default Home;
  