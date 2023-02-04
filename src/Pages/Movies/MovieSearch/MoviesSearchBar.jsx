import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { FetchByName } from '../FetchByName/FetchByName';
import './MovieSearchBar.css';

const toastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
export const MoviesSearch = ({ setMovies }) => {
  const [Searchbar, setSearchbar] = useState('');

  const onSearchBarChange = e => setSearchbar(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (Searchbar !== '') {
      FetchByName(Searchbar).then(data => {
        data.length > 0
          ? setMovies(data)
          : toast.error('No films found with this title.', toastOptions);
      });
    }
  };

  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />
    </>
  );
};
