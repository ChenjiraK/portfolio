import React, { useEffect } from 'react';
import { useRoutes, useLocation, RouteObject } from 'react-router-dom';
/** pages */
import Home from '../pages/Home.tsx';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

const Routes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const routing = useRoutes(routes);
  return routing;
};

export default Routes;
