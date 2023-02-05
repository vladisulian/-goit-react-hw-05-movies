import { getPosterUrl } from 'Pages/Movies/MovieDetails/MovieDetails';
export const RenderCast = ({ cast }) => {
  console.log('cast from RenderCast.jsx', cast);

  return cast.map(actor => {
    if (actor.profile_path)
      return (
        <li key={actor.id} className="actor">
          <img src={getPosterUrl(actor.profile_path)} alt="actorPhoto" />
          <p className="actor-name">{actor.name}</p>
          <p className='actor-character'>{actor.character}</p>
        </li>
      );
  });
};
