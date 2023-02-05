import { Layout } from 'Layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Homepage } from 'Pages/Homepage/Homepage';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/Movies/MovieDetails/MovieDetails';
import { Cast } from 'Pages/Movies/AdditionalInformation/Cast/Cast';

// const Homepage = lazy(() => import('./Pages/Homepage/Homepage'));
// console.log(Homepage);

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};
