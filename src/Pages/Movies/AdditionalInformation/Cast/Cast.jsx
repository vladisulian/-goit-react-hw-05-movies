import './Cast.css';
import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from 'Pages/API/API';
import { RenderCast } from './RenderCast/RenderCast';
import { RenderCastList } from './RenderCast/RenderCastList';
import { Loading } from 'Pages/Loading/Loading';

const Cast = () => {
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
      <Suspense fallback={<Loading />}>
        <RenderCastList>
          <RenderCast cast={cast} />
        </RenderCastList>
      </Suspense>
    </>
  );
};

export default Cast;
