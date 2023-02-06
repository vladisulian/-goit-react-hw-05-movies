import { useEffect, useState } from 'react';
import { FetchTrending } from 'Pages/API/API';
import { RenderTrending } from './RenderTrending/RenderTrending';
import { TrendingList } from './RenderTrending/TrendingList';

export const Homepage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    FetchTrending()
      .then(data => setTrending(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <TrendingList>
      <RenderTrending trendFilms={trending} />
    </TrendingList>
  );
};
