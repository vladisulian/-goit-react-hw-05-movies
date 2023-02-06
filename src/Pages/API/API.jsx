import axios from 'axios';
const API_KEY = '635ac74a11f3f55a21a984cd556f5915';
const URL = 'https://api.themoviedb.org/3/';
export async function FetchTrending() {
  const response = await axios.get(`
   ${URL}trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}
export async function FetchMovieDetails(id) {
  const response = await axios.get(
    `${URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response.data, 'from fetchMovieDetails');
  return response.data;
}
export async function FetchByName(name) {
  const response = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return response.data.results;
}
export async function FetchCast(id) {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  //   console.log('response.data', response.data);
  return response.data;
}
export async function FetchReviews(id) {
  const response = await axios.get(
    `${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  // console.log(response.data.results);
  return response.data.results;
}
