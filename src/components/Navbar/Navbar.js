import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navLinkStyle=({isActive})=>{
    return{
      fontWeight : isActive ? 'bold':'normal',
      color :isActive ? 'rgb(192, 80, 52)':'black'
    }
  }
  return (
    <nav>
      <NavLink style={navLinkStyle} to="/">Home</NavLink>
      <NavLink style={navLinkStyle} to="/review">Review</NavLink>
      <NavLink style={navLinkStyle} to="/dashboard">Dashboard</NavLink>
      <NavLink style={navLinkStyle} to="/blogs">Blogs</NavLink>
      <NavLink style={navLinkStyle} to="/notfound"></NavLink>
    </nav>
  );
};

export default Navbar;