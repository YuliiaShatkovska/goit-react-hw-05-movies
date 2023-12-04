import { Container } from 'components/App/App.styled';
import { MovieImg } from 'components/MovieList/MovieList.styled';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/api';
import { CastHeading, CastItem, CastList, CastText } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        const resp = await getMovieCast(movieId);
        setData(resp);
      } catch (err) {
        Notiflix.Notify.failure(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      <CastList>
        {data.map(cast => (
          <CastItem key={cast.id}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
            />
            <CastHeading>{cast.name}</CastHeading>
            <CastText>Chatacter: {cast.character}</CastText>
          </CastItem>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
