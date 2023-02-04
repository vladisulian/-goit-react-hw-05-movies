import { FetchTrending } from './Fetch/Fetch';
import { Header } from './Homepage/Header/Header';
import { useEffect, useState } from 'react';
export const App = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    FetchTrending().then(data => setTrending(data));
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
