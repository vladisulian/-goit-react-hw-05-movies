import axios from 'axios';
import { API_KEY } from 'Pages/API/API';

export async function FetchTrending() {
  const response = await axios.get(`
  https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}
