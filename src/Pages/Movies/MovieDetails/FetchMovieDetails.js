import axios from 'axios';
import { API_KEY } from 'Pages/API/API';

export async function FetchMovieDetails(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response.data, 'from fetchMovieDetails');
  return response.data;
}
