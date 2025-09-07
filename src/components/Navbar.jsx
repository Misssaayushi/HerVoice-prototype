import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaFileAlt, FaGavel, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="HerVoice Logo" />
        <h1 className="navbar-title">HerVoice</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={onHomeClick}><FaHome />Home</Link></li>
        <li><Link to="/case-status"><FaFileAlt />Case Status</Link></li>
        <li><Link to="/legal-toolkit"><FaGavel />Legal Toolkit</Link></li>
        <li><Link to="/emotional-support"><FaHeart />Emotional Support</Link></li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
};

export default Navbar;
