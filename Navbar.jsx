import React from 'react';
//import { FaHome, FaFileAlt, FaGlobe, FaBook, FaCode, FaMicrophone, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "HOME", path: '/' },
    { title: 'DIRECTORY', path: '/AlumniDirectory' },
    { title: 'JOBS', path: '/Job-listings' },
    { title: 'MENTORING', path: '/Mentoring' },
    { title: 'PROFILE', path: '/profile' }
  ];

  return (
    <div className="navigation">
    <div className="top-bar">
        <div className="logo-section">
          <img 
            src={logo} 
            alt="University Logo" 
            className="logo-image"
          />
          <h1 className="portal-title">
            Contact portal
          </h1>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="login-button"
        >
          LOGIN
        </button>
      </div>
    <div className="nav-bar">
        <nav className="nav-container">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li 
                key={index}
                className="nav-item"
              >
                <a 
                  href={item.path}
                  className="nav-link"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <span className="dropdown-indicator">▼</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
  export default Navbar;