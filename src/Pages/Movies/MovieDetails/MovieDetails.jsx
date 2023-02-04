import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from './FetchMovieDetails';
import './MovieDetails.css';
// import { RenderMovieDetails } from './RenderMovieDetails/RenderMovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
  const getPosterUrl = posterPath => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
  };
  const poster = getPosterUrl(currentMovie.poster_path);

  // const genres = currentMovie.genres.map(genre => genre.name);

  useEffect(() => {
    FetchMovieDetails(movieId)
      .then(data => setCurrentMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  // const getReleaseDate = () => {
  //   return currentMovie.release_date.slice(0, 4);
  // };
  // const releaseDate = getReleaseDate();

  return (
    <>
      <div className="movie-container">
        <img src={poster} alt="poster" className="poster" />

        {currentMovie && (
          <div className="text-container">
            <p className="film-title ">
              {currentMovie.title}
              <span >({currentMovie.release_date})</span>
            </p>
            <p className="film-bold">Popularity</p>
            <span className="popularity">{currentMovie.popularity}</span>
            <p className="film-bold overview">Overview</p>
            <p className="overview-desc">{currentMovie.overview}</p>
            {/* <p>Genres: {genres}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
