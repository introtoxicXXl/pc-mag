import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/review">Review</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/notfound"></Link>
    </nav>
  );
};

export default Navbar;