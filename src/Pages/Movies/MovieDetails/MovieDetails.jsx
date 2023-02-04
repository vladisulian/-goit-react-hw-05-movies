import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from './FetchMovieDetails';
// import { RenderMovieDetails } from './RenderMovieDetails/RenderMovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    FetchMovieDetails(movieId).then(data => {
      setCurrentMovie(data);
    });
  }, [movieId]);
  return (
    <>
      {/* <RenderMovieDetails movie={currentMovie} /> */}
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
            <img src={currentMovie.poster_path} alt="poster" />
          </div>
        </p>
      )}
    </>
  );
};
