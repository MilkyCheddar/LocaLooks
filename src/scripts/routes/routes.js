import Home from '../views/pages/home';
import AboutUs from '../views/pages/about-us';
import BrandProducts from '../views/pages/brands-detail';
import BrandList from '../views/pages/brands-catalogue';


const routes = {
  '/': Home,
  '/home': Home,
  '/about-us': AboutUs,
  '/brands-catalogue': BrandList,
  '/brands-detail': BrandProducts, //later we added the id 
  '*': 'NotFound',
};

export default routes;
