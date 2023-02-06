import { getPosterUrl } from 'Pages/Movies/MovieDetails/MovieDetails';

export const RenderReviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <h1>There is now reviews</h1>;
  } else {
    return reviews.map(review => {
      let avatar = getPosterUrl(review.author_details.avatar_path);
      if (reviews.length !== 0)
        return (
          <li key={review.id} className="review-author">
            <div className="review-author-info">
              <p className="review-author-name">
                {review.author} <span>"{review.author_details.username}"</span>
              </p>
              {review.author_details.avatar_path ? (
                <img src={avatar} alt="avatar" className="review-avatar" />
              ) : (
                <div className="review-without-avatar">Avatar</div>
              )}
            </div>

            <div className="review-text-container">
              <p className="review-text">{review.content}</p>
            </div>
          </li>
        );
    });
  }
};
