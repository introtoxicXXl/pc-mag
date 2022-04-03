import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
  const { name, img, rating, review } = props.review;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {review}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cart;