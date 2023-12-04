import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import { lazy } from 'react';
import { getMovieById } from 'service/api';

getMovieById(57243);

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
