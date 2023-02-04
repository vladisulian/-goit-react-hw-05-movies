import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from './FetchMovieDetails';
// import { RenderMovieDetails } from './RenderMovieDetails/RenderMovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  const getPosterUrl = posterPath => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
  };
  const poster = getPosterUrl(currentMovie.poster_path);

  useEffect(() => {
    FetchMovieDetails(movieId).then(data => {
      setCurrentMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movieId && (
        <p>
          <div>
            <p>
              {currentMovie.title}
              {currentMovie.release_date}
            </p>
            <p>Popularity - {currentMovie.popularity}</p>
            <p>Overview - {currentMovie.overview}</p>
            <p>Genres - </p>
            <img src={poster} alt="poster" />
          </div>
        </p>
      )}
    </>
  );
};
