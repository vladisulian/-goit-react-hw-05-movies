import axios from 'axios';
import './Reviews.css';
import { API_KEY } from '../Cast/FetchCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function FetchReviews(id) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log(response.data.results);
      return response.data.results;
    }
    FetchReviews(movieId)
      .then(data => setReviews(data))
      .catch(e => console.log(e));
  }, [movieId]);
};
