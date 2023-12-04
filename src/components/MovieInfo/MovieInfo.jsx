import { MovieImg } from 'components/MovieList/MovieList.styled';
import { MovieInfoContainer, Text, TextContainer } from './MovieInfo.styled';

const MovieInfo = ({
  movie: { poster_path, original_title, vote_average, overview, genres },
}) => {
  return (
    <MovieInfoContainer>
      <MovieImg
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />

      <TextContainer>
        <div>
          <h3>{original_title}</h3>
          <Text>User score: {vote_average}</Text>
        </div>

        <div>
          <h3>Overview</h3>
          <Text>{overview}</Text>
        </div>

        <div>
          <h3>Genres</h3>
          {genres.length > 0 &&
            genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
        </div>
      </TextContainer>
    </MovieInfoContainer>
  );
};

export default MovieInfo;
