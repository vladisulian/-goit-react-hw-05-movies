import { getPosterUrl } from 'Pages/Movies/MovieDetails/MovieDetails';
export const RenderReviews = ({ reviews }) => {
  return reviews.map(review => {
    let avatar = getPosterUrl(review.author_details.avatar_path);
    if (reviews.length !== 0) {
      return (
        <li key={review.id} className="review-author">
          <p className="review-author-name">
            {review.author} <span>"{review.author_details.username}"</span>
          </p>
          {review.author_details.avatar_path ? (
            <img src={avatar} alt="avatar" className="review-avatar" />
          ) : (
            <div className="review-without-avatar">Avatar</div>
          )}
          <div className="review-text-container">
            <p className="review-text">{review.content}</p>
          </div>
        </li>
      );
    }
  });
};
