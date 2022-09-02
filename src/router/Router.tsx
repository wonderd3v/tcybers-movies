import { Routes, Route } from 'react-router-dom';
import { Home, Details } from '../pages';
import { Favorites } from '../pages/Favorites';

export const mainRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/details/:idMovies',
    component: <Details />,
  },
  {
    path: '/*',
    component: <Home />,
  },
  {
    path: '/favorites',
    component: <Favorites />,
  },
];

export const Router = () => {
  return (
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
