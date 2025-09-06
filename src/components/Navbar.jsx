import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGavel, FaHeart, FaChartLine } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="herVoice Logo" />
        <span className="navbar-title">herVoice</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/case-status">
            <FaChartLine />
            <span>Case Status</span>
          </Link>
        </li>
        <li>
          <Link to="/legal-toolkit">
            <FaGavel />
            <span>Legal Toolkit</span>
          </Link>
        </li>
        <li>
          <Link to="/emotional-support">
            <FaHeart />
            <span>Emotional Support</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
