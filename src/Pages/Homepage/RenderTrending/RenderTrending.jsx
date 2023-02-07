import { Link, useLocation } from 'react-router-dom';
export const RenderTrending = ({ trendFilms }) => {
  const location = useLocation();
  return trendFilms.map(film => {
    if (film.title)
      return (
        <li key={film.id}>
          <Link to={`movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      );
  });
};
