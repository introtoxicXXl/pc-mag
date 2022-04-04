import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './cart.css';

const Cart = (props) => {
  const { name, img, rating, review } = props.review;
  return (
    <div className='card'>
    <img src={img} alt="" />
    <h3>{name}</h3>
    <p>{review}</p>
    <p><small>Rating: {rating} <FontAwesomeIcon className='star-icon' icon={faStar}></FontAwesomeIcon></small></p>
    </div>
  )
}

export default Cart;