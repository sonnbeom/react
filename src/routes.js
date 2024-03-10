import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/blogs',
    component: ListPage
  },
  {
    path: '/blogs/create',
    component: CreatePage
  },
  {
    path: '/blogs/edit',
    component: EditPage
  }
];

export default routes;