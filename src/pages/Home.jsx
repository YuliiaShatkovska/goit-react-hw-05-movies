import { Container, Heading } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <Heading>Trending this week</Heading>
        {isLoading && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </>
  );
};

export default Home;
