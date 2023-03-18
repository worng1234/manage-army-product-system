import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';

//! ** Import Route
import mainRoutes from './views/main-page/MainRoute';
import userProfileRoutes from './views/user-profile/UserProfileRoutes';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      //! Route System
      ...mainRoutes,
      ...userProfileRoutes,

      //! Route Template
      ...dashboardRoutes,
      ...chartsRoute,
      ...materialRoutes,
    ],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="main" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
