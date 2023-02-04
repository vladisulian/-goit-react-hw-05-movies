import { Homepage } from 'Pages/Homepage/Homepage';
import { Layout } from 'Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Movies } from 'Pages/Movies/MoviesSearchBar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};