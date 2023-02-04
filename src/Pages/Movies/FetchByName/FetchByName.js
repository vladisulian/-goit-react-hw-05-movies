import axios from 'axios';

export async function FetchByName(name) {
  const API_KEY = '635ac74a11f3f55a21a984cd556f5915';

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return response.data.results;
}
