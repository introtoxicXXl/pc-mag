import React from 'react';
import useReview from '../../hooks/useReview';
import Cart from '../Cart/Cart';

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <h2 className='m-5 fw-bold fs-1'>Best Clint Review</h2>
      <div className='card-container'>
        {
          reviews.map(review => <Cart key={review.id} review={review}></Cart>)
        }
      </div>
    </div>
  )
};

export default Review;