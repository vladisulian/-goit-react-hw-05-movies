import { MoviesSearch } from './MovieSearch/MoviesSearchBar';
import { MovieList } from './MovieList&Items/MovieList';
import { MovieItem } from './MovieList&Items/MovieItem';
import { useState } from 'react';

const Movies = () => {
  const [Movies, setMovies] = useState([]);

  const handleSetMovies = movieName => setMovies(movieName);

  return (
    <>
      <MoviesSearch setMovies={handleSetMovies} />
      <MovieList>
        <MovieItem movies={Movies} />
      </MovieList>
    </>
  );
};

export default Movies;
