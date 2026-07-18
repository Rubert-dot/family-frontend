import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          padding: 15px 25px;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-brand {
          font-size: 22px;
          font-weight: 700;
          color: #1a2b4c;
          letter-spacing: -0.5px;
        }

        .navbar-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-item {
          text-decoration: none;
          color: #4a5568;
          font-size: 15px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          color: #1a2b4c;
          background-color: #f7fafc;
        }

        .nav-item.active {
          color: #ffffff;
          background-color: #1a2b4c;
          font-weight: 600;
        }

       
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .menu-toggle span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #1a2b4c;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex; 
          }

          .navbar-links {
            display: ${isOpen ? 'flex' : 'none'}; 
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            padding: 20px 0;
            gap: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
            border-top: 1px solid #edf2f7;
          }

          .nav-item {
            width: 85%;
            text-align: center;
            padding: 12px 0;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-brand">🌳 Our Family</div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span style={{ transform: isOpen ? 'rotate(45deg) translate(6px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>

        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/family-tree" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Family Tree</NavLink>
          {/* <NavLink to="/directory" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Directory</NavLink> */}
          <NavLink to="/photos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Photos</NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Calendar</NavLink>
          <NavLink to="/memories" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={() => setIsOpen(false)}>Memories</NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;