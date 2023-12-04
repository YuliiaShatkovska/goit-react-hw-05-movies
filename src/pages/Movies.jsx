import { Container, Heading } from 'components/App/App.styled';
import MovieList from 'components/MovieList/MovieList';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'service/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const handleSubmit = value => {
    setSearchParams({ movie: value });
  };

  useEffect(() => {
    const params = searchParams.get('movie') || '';
    if (!params) return;

    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesBySearch(params);
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchParams]);

  return (
    <Container>
      <Heading>Search movies</Heading>
      {isLoading && <div>Loading...</div>}
      <SearchMoviesForm handleSubmit={handleSubmit} />
      {data.length > 0 && <MovieList movies={data} location={location} />}
    </Container>
  );
};

export default Movies;
