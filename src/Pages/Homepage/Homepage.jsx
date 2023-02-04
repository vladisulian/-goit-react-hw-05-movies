import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { FetchTrending } from 'Pages/Homepage/FetchTrending/Fetch-trending';
import { Header } from './Header/Header';
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
    <>
      <Header />
      <TrendingList>
        <RenderTrending trendFilms={trending} />
      </TrendingList>
    </>
  );
};
