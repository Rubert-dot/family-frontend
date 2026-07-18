import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">Our Family</div>
        <div className="navbar-links">
         
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>

        
          <NavLink to="/photos" className={({ isActive }) => isActive ? 'active' : ''}>Photos</NavLink>

         
          <NavLink to="/calendar" className={({ isActive }) => isActive ? 'active' : ''}>Calendar</NavLink>

          <NavLink to="/memories" className={({ isActive }) => isActive ? 'active' : ''}>Memories</NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;