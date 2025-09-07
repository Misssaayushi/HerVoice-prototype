import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ThreatDetail.css';

const ThreatDetail = ({ onNext, onBack }) => {
  const [threatInfo, setThreatInfo] = useState({
    platform: '',
    threatType: '',
    description: '',
    date: '',
    isAnonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setThreatInfo(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleNext = () => {
    // Basic validation
    if (!threatInfo.platform || !threatInfo.description) {
      alert('Please fill in all required fields.');
      return;
    }
    onNext({ threatDetail: threatInfo });
  };

  return (
    <div className="threat-detail-container">
      <h2>Threat Details</h2>
      <form className="threat-detail-form">
        <div className="form-group">
          <label>Platform (e.g., Facebook, Twitter, etc.)</label>
          <input type="text" name="platform" value={threatInfo.platform} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Type of Threat</label>
          <input type="text" name="threatType" value={threatInfo.threatType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description of Incident</label>
          <textarea name="description" value={threatInfo.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Date of Incident</label>
          <input type="date" name="date" value={threatInfo.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isAnonymous" checked={threatInfo.isAnonymous} onChange={handleChange} />
            Report Anonymously
          </label>
        </div>
        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onBack}>Back</button>
          <button type="button" className="btn-primary" onClick={handleNext}>Next</button>
        </div>
      </form>
    </div>
  );
};

ThreatDetail.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default ThreatDetail;
