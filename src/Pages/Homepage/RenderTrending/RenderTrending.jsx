export const RenderTrending = ({ trendFilms }) => {
  return trendFilms.map(film => {
    if (film.title) return <li key={film.id}>{film.title}</li>;
  });
};
