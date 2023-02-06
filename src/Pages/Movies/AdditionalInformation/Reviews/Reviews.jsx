import './Reviews.css';
import { FetchReviews } from 'Pages/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RenderReviewsList } from './RenderReviews/RenderReviewList';
import { RenderReviews } from './RenderReviews/RenderReviews';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([]);

    FetchReviews(movieId)
      .then(data => setReviews(data))
      .catch(e => console.log(e));
  }, [movieId]);

  return (
    <>
      <RenderReviewsList>
        <RenderReviews reviews={reviews} />
      </RenderReviewsList>
    </>
  );
};
