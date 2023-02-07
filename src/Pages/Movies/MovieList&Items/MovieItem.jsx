import { Link, useLocation } from 'react-router-dom';
export const MovieItem = ({ movies }) => {
  const location = useLocation();

  return movies.map(movie => {
    return (
      <li key={movie.id}>
        <Link
          to={`${movie.id}`}
          state={{ from: location }}
          className="movie-link"
        >
          {movie.title}
        </Link>
      </li>
    );
  });
};
