import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../../server/server';
import CONFIG from './globals/config';
//import App from './views/app';
//import swRegister from './utils/sw-register';
//import WebSocketInitiator from './utils/websocket-initiator';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#explore'),
  hero: document.querySelector('#hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
