import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from './FetchCast';
import { RenderCast } from './RenderCast/RenderCast';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
  //   console.log('array from Cast.jsx', cast);

  return (
    <>
      <ul>
        <RenderCast cast={cast} />
      </ul>
    </>
  );
};
