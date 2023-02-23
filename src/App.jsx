import { Layout } from 'Layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./Pages/Movies/MovieDetails/MovieDetails')
);
const Cast = lazy(() =>
  import('./Pages/Movies/AdditionalInformation/Cast/Cast')
);
const Reviews = lazy(() =>
  import('./Pages/Movies/AdditionalInformation/Reviews/Reviews')
);
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

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
