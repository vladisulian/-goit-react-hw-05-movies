import axios from 'axios';
import { API_KEY } from 'Pages/API/API';

export async function FetchCast(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  //   console.log('response.data', response.data);
  return response.data;
}
