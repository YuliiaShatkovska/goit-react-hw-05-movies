import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';

import { getMovieById } from 'service/api';

import {
  Container,
  MovieDetailsLink,
  MovieDetailsList,
} from 'components/App/App.styled';
import { GoBack } from 'components/GoBackButton/GoBackButton';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        Notiflix.Notify.failure(err);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  const goBackPath = location?.state?.from ?? '/';

  return (
    <Container>
      {isLoading && <Loader />}
      <GoBack path={goBackPath} />
      {movie && <MovieInfo movie={movie} />}
      <MovieDetailsList>
        <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
        <MovieDetailsLink to="reviews">Reviews</MovieDetailsLink>
      </MovieDetailsList>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
