import './Cast.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from './FetchCast';
import { RenderCast } from './RenderCast/RenderCast';
import { RenderCastList } from './RenderCast/RenderCastList';

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
      <RenderCastList>
        <RenderCast cast={cast} />
      </RenderCastList>
    </>
  );
};
