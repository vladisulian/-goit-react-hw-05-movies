import { FetchTrending } from './Fetch/Fetch';
import { Header } from './Homepage/Header/Header';
import { useEffect, useState } from 'react';
export const App = () => {
  useEffect(() => {
    FetchTrending();
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
