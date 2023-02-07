import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from 'Pages/API/API';
import './MovieDetails.css';
import { Loading } from 'Pages/Loading/Loading';

export const getPosterUrl = posterPath => {
  if (String(posterPath).includes('https:')) {
    return posterPath.slice(1);
  } else {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
  }
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  const location = useLocation();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

  const poster = getPosterUrl(currentMovie.poster_path);

  useEffect(() => {
    FetchMovieDetails(movieId)
      .then(data => setCurrentMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Link to={backLink} className="back-home-link">
          Back home
        </Link>
        <div className="movie-container">
          <img src={poster} alt="poster" className="poster" />
          <div className="text-container">
            <p className="film-title ">
              {currentMovie.title}
              <span> ({String(currentMovie.release_date).slice(0, 4)})</span>
            </p>
            <p className="film-bold">Popularity</p>
            <span className="popularity">{currentMovie.popularity}</span>
            <p className="film-bold overview">Overview</p>
            <p className="overview-desc">{currentMovie.overview}</p>
            {/* <p>Genres: {genres}</p> */}
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`cast`} state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`reviews`} state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
