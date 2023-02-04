import { Link } from 'react-router-dom';
export const MovieItem = ({ movies }) => {
  console.log(movies);
  return movies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`${movie.id}`} className="movie-link">
          {movie.title}
        </Link>
      </li>
    );
  });
};
