import { Link } from 'react-router-dom';
export const RenderTrending = ({ trendFilms }) => {
  return trendFilms.map(film => {
    if (film.title)
      return (
        <li key={film.id}>
          <Link to={`movies/${film.id}`}>{film.title}</Link>
        </li>
      );
  });
};
