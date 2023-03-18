import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Main = Loadable(lazy(() => import('./Main')));

const mainRoutes = [
  { path: '/main', element: <Main /> },
];

export default mainRoutes;
