import { Layout } from 'Layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Homepage } from 'Pages/Homepage/Homepage';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/Movies/MovieDetails/MovieDetails';
import { Cast } from 'Pages/Movies/AdditionalInformation/Cast/Cast';
import { Reviews } from 'Pages/Movies/AdditionalInformation/Reviews/Reviews';
import { NotFoundPage } from 'Pages/NotFoundPage/NotFoundPage';

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
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
