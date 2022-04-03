import React from 'react';
import picture from '../../laptop-picture.png';
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="left-side">
        <div className='home-info'>
          <h1>Supercharged for pros.</h1>
          <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast</p>
        </div>
      </div>
      <div className="right-side">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default Home;