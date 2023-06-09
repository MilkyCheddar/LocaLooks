import 'regenerator-runtime';
import './components/nav-bar';
import './components/hero-section';
import './components/about-us';
import './components/home';
import './components/brands-section';
import './components/brands-detail';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/about-us.css';
import App from './views/app';
import swRegister from './utils/sw-register';
//import CONFIG from './globals/config';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  hero: document.querySelector('#hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
