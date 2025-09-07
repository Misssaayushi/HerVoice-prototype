
import React from 'react';
import PropTypes from 'prop-types';
import './SmsDemo.css';

const SmsDemo = ({ message, onClose }) => {
  return (
    <div className="sms-demo-overlay" onClick={onClose}> 
      <div className="sms-demo-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sms-demo-header">
          <h3>Simulated SMS Preview</h3>
          <button onClick={onClose} className="sms-demo-close-btn">
            &times;
          </button>
        </div>
        <div className="sms-demo-body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

SmsDemo.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SmsDemo;
