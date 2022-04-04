import React from 'react';
import useReview from '../../hooks/useReview';
import picture from '../../laptop-picture.png';
import Cart from '../Cart/Cart';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate =useNavigate();
  const handelReview =()=>{
    navigate('/review');
  }
  const [reviews, setReviews] = useReview();
  return (
    <div className='home-container'>
      <div className="home-info">
        <h1>Supercharged for pros.</h1>
        <img src={picture} alt="" />
        <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip the first Apple silicon designed for pros you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast</p>
      </div>
      <h2 className='m-5 fw-bold fs-1'>Best Clint Review</h2>
      <div className='card-container'>
        {
          reviews.map(review => <Cart key={review.id} review={review}></Cart>).slice(0,3)
        }
      </div>
      <button className='review-btn' onClick={handelReview}>See All Review</button>
    </div>
  );
};

export default Home;