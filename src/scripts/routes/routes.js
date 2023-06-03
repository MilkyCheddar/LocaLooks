import LIST from '../views/pages/brands-list';
import Detail from '../views/pages/detail';
import HomePage from '../views/pages/home';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/brands': LIST,
  '/detail/:id': Detail,
  '*': 'NotFound',
};

export default routes;
