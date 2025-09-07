import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThreatenedForm = ({ onFormSubmit }) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ phone, email });
  };

  return (
    <div className="form-container">
      <h2>Contact Information</h2>
      <p>Please provide your contact information so we can reach out to you with support.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

ThreatenedForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default ThreatenedForm;