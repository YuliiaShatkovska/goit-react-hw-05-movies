import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';

import { getMovieById } from 'service/api';
import { GoBackBtn } from 'components/GoBackButton/GoBackButton';
import { Container } from 'components/App/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const goBackPath = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      <GoBackBtn path={goBackPath}>Go back</GoBackBtn>
      {movie && <MovieInfo movie={movie} />}
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
