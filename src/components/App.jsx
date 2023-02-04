import { FetchTrending } from './Fetch/Fetch-trending';
import { Header } from './Homepage/Header/Header';
import { useEffect, useState } from 'react';
import { TrendingList } from './Homepage/RenderTrending/TrendingList';
import { RenderTrending } from './Homepage/RenderTrending/RenderTrending';
export const App = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    FetchTrending().then(data => setTrending(data));
  }, []);

  return (
    <>
      <Header />
      <TrendingList>
        <RenderTrending trendFilms={trending} />
      </TrendingList>
    </>
  );
};
