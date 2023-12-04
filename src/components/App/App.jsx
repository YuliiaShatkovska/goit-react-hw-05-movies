import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import { lazy } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
