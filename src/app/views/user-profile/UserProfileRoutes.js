import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const UserProfile = Loadable(lazy(() => import('./UserProfile')));

const userProfileRoutes = [
    { path: '/user-profile/user', element: <UserProfile /> }
];

export default userProfileRoutes;
