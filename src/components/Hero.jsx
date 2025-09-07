import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({ onGetStarted, isAuthenticated, onAiScan }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="glass-card">
          <h1 className="hero-title">Your Safety, Amplified</h1>
          <p className="hero-subtitle">
            Empowering women to report threats and find support, securely and anonymously.
          </p>
          {isAuthenticated ? (
            <div className="hero-buttons">
              <button onClick={onGetStarted} className="btn btn-primary">
                How this works
              </button>
              <button onClick={onAiScan} className="btn btn-secondary">
                AI Scan
              </button>
            </div>
          ) : (
            <button onClick={onGetStarted} className="btn btn-primary">
              Get Started
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  onAiScan: PropTypes.func,
};

Hero.defaultProps = {
  isAuthenticated: false,
  onAiScan: () => {},
};

export default Hero;
