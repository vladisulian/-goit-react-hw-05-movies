import { useState } from 'react';
import { FetchByName } from './FetchByName/FetchByName';
import './MovieSearchBar.css';
export const MoviesSearchBar = () => {
  const [Searchbar, setSearchbar] = useState('');
  const [Films, setFilms] = useState([]);

  const onSearchBarChange = e => setSearchbar(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (Searchbar !== '') {
      FetchByName(Searchbar).then(data => setFilms(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movie-name">
        <input
          type="text"
          name="movie-name"
          placeholder="Search film by name"
          onChange={onSearchBarChange}
          autoComplete="off"
        />
      </label>
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
};
