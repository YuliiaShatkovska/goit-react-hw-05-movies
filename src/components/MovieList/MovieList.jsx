import { Link } from 'react-router-dom';
import { Item, List, MovieImg, MovieText } from './MovieList.styled';
import { BiCameraMovie } from 'react-icons/bi';
import defaultImg from 'default-movie.jpg';

const MovieList = ({ movies, location }) => {
  // const location = useLocation();
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200${poster_path}`
                  : defaultImg
              }
              alt={original_title}
            />
            <MovieText>
              <BiCameraMovie />
              {original_title}
            </MovieText>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
