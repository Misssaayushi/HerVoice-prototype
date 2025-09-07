import React from 'react';
import PropTypes from 'prop-types';
import './WarningModal.css';

const WarningModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>New Message</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>
            🚨 <strong>**LEGAL ACTION IMMINENT**</strong> 🚨
          </p>
          <p>
            We have detected that you are in possession of and may be distributing
            private, intimate images of our client. This is a{' '}
            <strong>**FINAL WARNING**</strong>.
          </p>
          <p>
            Your actions are a direct violation of:
            <br />- <strong>**Cybercrime Prevention Act (e.g., Section 67, 67A of IT Act)**</strong>
            <br />- <strong>**Violation of Privacy of Communication**</strong>
            <br />- <strong>**Copyright Infringement**</strong>
          </p>
          <p>
            These offenses carry severe penalties, including:
            <br />- 🚓 <strong>**IMPRISONMENT up to 7 YEARS.**</strong>
            <br />- 💰 <strong>**SUBSTANTIAL FINES.**</strong>
          </p>
          <p>
            Our AI has logged your contact details and a timestamp of this warning. You
            have <strong>**24 HOURS**</strong> to permanently delete all illicit material.
          </p>
          <p>
            Failure to comply will result in:
            <br />
            1. A criminal complaint filed with the Cyber Crime division.
            <br />
            2. Initiation of a civil lawsuit for maximum damages.
          </p>
          <p>
            Your compliance is being monitored. Delete everything{' '}
            <strong>**NOW**</strong>. This is your only chance to avoid legal
            consequences. ⚖️
          </p>
        </div>
      </div>
    </div>
  );
};

WarningModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WarningModal;
