import 'regenerator-runtime';
import './components/nav-bar';
import './components/about-us';
import './components/brands-section';
import './components/brands-detail';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/about-us.css';
import '../styles/detail.css';
import '../styles/brands-list.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'bootstrap/dist/css/bootstrap.min.css';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
