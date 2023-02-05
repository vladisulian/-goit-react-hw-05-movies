import { Homepage } from 'Pages/Homepage/Homepage';
import { Layout } from 'Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/Movies/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId/cast"></Route>
          <Route path="movies/:movieId/reviews"></Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
};
