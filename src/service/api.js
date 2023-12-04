import axios from 'axios';

const KEY = '44885dde96f42b0b92940c483d6f927e';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
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

export const getMovieCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  );

  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
  );
  return data.results;
};
