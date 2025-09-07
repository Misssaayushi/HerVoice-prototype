import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Submission.css';

const Submission = ({ reportData }) => {
  console.log("Report data in submission component:", reportData);
  return (
    <div className="submission-container">
      <h2>Thank You for Your Submission</h2>
      <p>Your report has been received. We will review the information you provided and take appropriate action.</p>
      <p>A confirmation email has been sent to you.</p>
      <Link to="/" className="btn-primary">Return to Home</Link>
    </div>
  );
};

Submission.propTypes = {
  reportData: PropTypes.object.isRequired,
};

export default Submission;
