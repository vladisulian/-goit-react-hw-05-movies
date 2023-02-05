import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from './FetchCast';

export const Cast = () => {
  const [cast, setCast] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    setCast({});
    FetchCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(cast);
  return <></>;
};
