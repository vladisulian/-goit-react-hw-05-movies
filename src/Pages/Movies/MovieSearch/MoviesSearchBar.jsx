import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './MovieSearchBar.css';
import { useState } from 'react';
import { FetchByName } from '../FetchByName/FetchByName';
import { useSearchParams } from 'react-router-dom';

const toastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
export const MoviesSearch = ({ setMovies }) => {
  const [Searchbar, setSearchbar] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? "";

  const updateQueryString = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };

  const onSearchBarChange = e => setSearchbar(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (Searchbar !== '')
      FetchByName(Searchbar).then(data => {
        data.length > 0
          ? setMovies(data)
          : toast.error('No films found with this title.', toastOptions);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-name">
          <input
            type="text"
            name="movie-name"
            placeholder="Search film by name"
            value={searchQuery}
            onChange={e => {
              updateQueryString(e.target.value);
              setSearchParams({ search: e.target.value });
              onSearchBarChange(e);
            }}
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
