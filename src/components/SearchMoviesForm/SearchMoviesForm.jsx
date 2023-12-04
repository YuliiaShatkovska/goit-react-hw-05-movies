import {
  MoviesForm,
  MoviesFormBtn,
  MoviesFormInput,
} from './SearchMoviesForm.styled';
import { CiSearch } from 'react-icons/ci';

const SearchMoviesForm = ({ handleSubmit }) => {
  const handleSearch = event => {
    event.preventDefault();

    handleSubmit(event.target.search.value);
    event.currentTarget.reset();
  };

  return (
    <>
      <MoviesForm onSubmit={handleSearch}>
        <label htmlFor="input-search"></label>
        <MoviesFormInput
          type="text"
          id="input-search"
          name="search"
          autoComplete="off"
          required
        />

        <MoviesFormBtn type="submit">
          <CiSearch size={30} />
        </MoviesFormBtn>
      </MoviesForm>
    </>
  );
};

export default SearchMoviesForm;
