import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AiScan.css';
import WarningModal from './WarningModal';

const AiScan = ({ onComplete }) => {
  const [scanStep, setScanStep] = useState(0);
  const [fileName, setFileName] = useState('');
  const [imageFound, setImageFound] = useState(false);
  const [feelThreatened, setFeelThreatened] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  const handleCheckImage = () => {
    setScanStep(1);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setTimeout(() => {
        setScanStep(2);
        setTimeout(() => {
          const found = Math.random() > 0.5;
          setImageFound(found);
          setScanStep(3);
        }, 3000);
      }, 1000);
    }
  };

  const handleSendWarning = () => {
    setShowWarningModal(true);
  };

  const handleCloseModal = () => {
    setShowWarningModal(false);
    onComplete();
  };

  const handleStartOver = () => {
    setScanStep(0);
    setFileName('');
    setFeelThreatened(false);
  };

  const renderScanStep = () => {
    switch (scanStep) {
      case 0:
        return (
          <div className="ai-scan-card">
            <h2 className="ai-scan-title">Thank you. Now, let's check for the image.</h2>
            <p className="ai-scan-subtitle">
              Click the button below to upload the image for our AI scan.
            </p>
            <button onClick={handleCheckImage} className="btn btn-primary">
              Check Image
            </button>
          </div>
        );
      case 1:
        return (
          <div className="ai-scan-card">
            <h2 className="ai-scan-title">Upload Your Image</h2>
            <p className="ai-scan-subtitle">
              Please upload the image you are concerned about.
            </p>
            <div className="file-upload-container">
              <input type="file" id="file-upload" onChange={handleFileChange} />
              <label htmlFor="file-upload" className="btn-file-upload">
                Choose File
              </label>
              <span className="file-name">{fileName || 'No file chosen'}</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="ai-scan-card">
            <h2 className="ai-scan-title">AI Check in Progress...</h2>
            <p className="ai-scan-subtitle">
              Our AI is scanning the web for your image. This may take a moment.
            </p>
            <div className="loader"></div>
          </div>
        );
      case 3:
        if (imageFound) {
          return (
            <div className="ai-scan-card found">
              <h2 className="ai-scan-title-found">Image Found Online 🚨</h2>
              <p className="ai-scan-subtitle-found">
                Our AI has found a match for your image. Your image may be circulating online.
              </p>
              <p className="ai-scan-question">
                Do you want to send a formal legal warning to the contact you provided?
              </p>
              <div className="hero-buttons">
                <button onClick={handleSendWarning} className="btn btn-danger">
                  Yes, Send Warning
                </button>
                <button onClick={handleStartOver} className="btn btn-secondary">
                  No, Start Over
                </button>
              </div>
            </div>
          );
        }
        return (
          <div className="ai-scan-card safe">
            <h2 className="ai-scan-title-safe">Image Not Found ✅</h2>
            <p className="ai-scan-subtitle-safe">
              Good news! Our AI scan did not find your image circulating on the public web. Your image appears to be safe.
            </p>
            <p className="ai-scan-question">
              However, if you still feel threatened or have concerns, please let us know.
            </p>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="threatened"
                checked={feelThreatened}
                onChange={() => setFeelThreatened(!feelThreatened)}
              />
              <label htmlFor="threatened">I still feel threatened.</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ai-scan-container">
      {renderScanStep()}
      <WarningModal show={showWarningModal} onClose={handleCloseModal} />
    </div>
  );
};

AiScan.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default AiScan;
