import axios from 'axios';

export async function FetchCast(id) {
  const API_KEY = '635ac74a11f3f55a21a984cd556f5915';
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
//   console.log('response.data', response.data);
  return response.data;
}
