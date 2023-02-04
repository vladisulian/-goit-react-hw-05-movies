import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from './FetchMovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieDetails(movieId).then(data => console.log(data));
  }, [movieId]);

  return (
    <>
      <div></div>
    </>
  );
};
