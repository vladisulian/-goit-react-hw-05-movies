import axios from 'axios';
import { API_KEY } from 'Pages/API/API';

export async function FetchByName(name) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return response.data.results;
}
