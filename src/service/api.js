import axios from 'axios';

const KEY = '44885dde96f42b0b92940c483d6f927e';

// axios.defaults.baseURL = 'https://www.themoviedb.org/3';
// axios.defaults.params = {
//   api_key: KEY,
// };

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`
  );

  return data.results;
};

export const getMoviesBySearch = async value => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${KEY}`
  );
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`
  );

  return data;
};
