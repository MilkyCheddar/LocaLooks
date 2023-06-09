const DrawerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this.toggleDrawer(event, drawer);
      });
  
      content.addEventListener('click', (event) => {
        this.closeDrawer(event, drawer);
      });
    },
  
    toggleDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('active');
    },
  
    closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('active');
    },
  };
  
  export default DrawerInitiator;
  