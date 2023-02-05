import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from './FetchMovieDetails';
import './MovieDetails.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  const getPosterUrl = posterPath => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
  };
  const poster = getPosterUrl(currentMovie.poster_path);

  useEffect(() => {
    FetchMovieDetails(movieId)
      .then(data => setCurrentMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  // const getReleaseDate = () => {
  //   return currentMovie.release_date.slice(0, 4);
  // };
  // const releaseDate = getReleaseDate();
  // const genres = currentMovie.genres.map(genre => genre.name);

  return (
    <>
      <div className="movie-container">
        <img src={poster} alt="poster" className="poster" />
        <div className="text-container">
          <p className="film-title ">
            {currentMovie.title}
            <span>({currentMovie.release_date})</span>
          </p>
          <p className="film-bold">Popularity</p>
          <span className="popularity">{currentMovie.popularity}</span>
          <p className="film-bold overview">Overview</p>
          <p className="overview-desc">{currentMovie.overview}</p>
          {/* <p>Genres: {genres}</p> */}
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<h4>Please, wait a bit. Loading...</h4>}>
        <Outlet />
      </Suspense>
    </>
  );
};
