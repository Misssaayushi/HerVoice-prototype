import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SuspectDetail.css';

const SuspectDetail = ({ onNext, onBack }) => {
  const [suspect, setSuspect] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    socialMedia: '',
    vehicle: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuspect(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation
    if (!suspect.name) {
      alert('Please enter a name or alias for the suspect.');
      return;
    }
    onNext({ suspectDetail: suspect });
  };

  return (
    <div className="suspect-detail-container">
      <h2>Suspect Details</h2>
      <form className="suspect-detail-form">
        <div className="form-group">
          <label>Name/Alias</label>
          <input type="text" name="name" value={suspect.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Age (Approximate)</label>
          <input type="text" name="age" value={suspect.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="gender" value={suspect.gender} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address/Location</label>
          <input type="text" name="address" value={suspect.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Social Media Profile(s)</label>
          <input type="text" name="socialMedia" value={suspect.socialMedia} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Vehicle Information</label>
          <input type="text" name="vehicle" value={suspect.vehicle} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Additional Information</label>
          <textarea name="additionalInfo" value={suspect.additionalInfo} onChange={handleChange}></textarea>
        </div>
        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onBack}>Back</button>
          <button type="button" className="btn-primary" onClick={handleNext}>Next</button>
        </div>
      </form>
    </div>
  );
};

SuspectDetail.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default SuspectDetail;
