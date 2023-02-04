import axios from 'axios';
export async function FetchTrending() {
  const API_KEY = '635ac74a11f3f55a21a984cd556f5915';

  const response = await axios.get(`
  https://api.themoviedb.org/3/trending/all/day?api_key=635ac74a11f3f55a21a984cd556f5915`);
  console.log(response);
  return response.data;
}
