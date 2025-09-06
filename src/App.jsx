import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload';
import BlackmailerForm from './components/BlackmailerForm';
import ThreatenedForm from './components/ThreatenedForm';
import AwarenessMessage from './components/AwarenessMessage';

// Placeholder components for the new pages
const CaseStatus = () => <div className="page-container"><h2>Case Status</h2><p>Here you can track the status of your case.</p></div>;
const LegalToolkit = () => <div className="page-container"><h2>Legal Toolkit</h2><p>Resources and legal information to help you.</p></div>;
const EmotionalSupport = () => <div className="page-container"><h2>Emotional Support</h2><p>Find support and resources to help you through this difficult time.</p></div>;

function App() {
  const [step, setStep] = useState(1);
  const [blackmailerData, setBlackmailerData] = useState(null);
  const [image, setImage] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [feelThreatened, setFeelThreatened] = useState(false);

  // Step 1: Blackmailer form is submitted
  const handleBlackmailerFormSubmit = (formData) => {
    console.log('Blackmailer form data:', formData);
    setBlackmailerData(formData);
    setStep(2); // Move to show the "Check Image" button
  };

  // Step 2: User clicks "Check Image" button
  const handleCheckImageClick = () => {
    setStep(3); // Move to image upload
  };

  // Step 3: Image is uploaded
  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
    setStep(4); // Move to AI check in progress
    // Fake AI check
    const fakeResult = Math.random() > 0.5 ? 'Found' : 'Not Found';
    setTimeout(() => {
      setAiResult(fakeResult);
      setStep(5); // Move to result display
    }, 2000);
  };

  // Step 5a: User confirms to send the warning
  const handleSendWarning = () => {
    console.log('Sending warning to:', blackmailerData);
    setStep(6); // Show "Warning Sent" message
  };

  // Step 5b: User feels threatened after "Not Found" result
  const handleThreatenedFormSubmit = (formData) => {
    console.log('Threatened form data:', formData);
    setStep(7); // Show support message
  };

  const handleFeelThreatenedChange = (e) => {
    setFeelThreatened(e.target.checked);
  };

  const Home = () => (
    <main className="app-main">
      {/* Step 1: Blackmailer Form */}
      {step === 1 && <BlackmailerForm onFormSubmit={handleBlackmailerFormSubmit} />}

      {/* Step 2: Show "Check Image" button */}
      {step === 2 && (
        <div className="intermediary-step">
          <h2>Thank you. Now, let's check for the image.</h2>
          <p>Click the button below to upload the image for our AI scan.</p>
          <button onClick={handleCheckImageClick} className="btn-primary">
            Check Image
          </button>
        </div>
      )}

      {/* Step 3: Image Upload */}
      {step === 3 && <ImageUpload onImageUpload={handleImageUpload} />}

      {/* Step 4: AI Check in Progress */}
      {step === 4 && (
        <div className="ai-check-container">
          <h2>AI Check in Progress...</h2>
          <p>Our AI is scanning the web for your image. This may take a moment.</p>
        </div>
      )}

      {/* Step 5: Results */}
      {step === 5 && aiResult === 'Found' && (
        <div className="result-container cautious-message">
          <h2>Image Found Online 🚨</h2>
          <p className="warning-text">
            Our AI has found a match for your image. Your image may be circulating online.
          </p>
          <p><strong>Do you want to send a formal legal warning to the contact you provided?</strong></p>
          <div className="button-group">
            <button onClick={handleSendWarning} className="btn-danger">
              Yes, Send Warning
            </button>
            <button onClick={() => setStep(1)} className="btn-secondary">
              No, Start Over
            </button>
          </div>
        </div>
      )}
      {step === 5 && aiResult === 'Not Found' && (
        <div className="result-container safe-message">
          <h2>Image Not Found ✅</h2>
          <p className="safe-text">
            Good news! Our AI scan did not find your image circulating on the public web. Your image appears to be safe.
          </p>
          <p>However, if you still feel threatened or have concerns, please let us know.</p>
          <label>
            <input type="checkbox" onChange={handleFeelThreatenedChange} />
            I still feel threatened.
          </label>
          {feelThreatened && <ThreatenedForm onFormSubmit={handleThreatenedFormSubmit} />}
        </div>
      )}

      {/* Step 6: Warning Sent Confirmation */}
      {step === 6 && (
        <div className="confirmation-container">
          <h2>Warning Sent</h2>
          <p>
            A warning has been sent to the contact you provided. If the image
            is not removed within 48 hours, you will be notified.
          </p>
        </div>
      )}

      {/* Step 7: Support Message */}
      {step === 7 && (
        <div className="confirmation-container">
          <h2>We're Here for You</h2>
          <p>
            Thank you for reaching out. We will be in touch with you shortly to
            provide support and resources.
          </p>
        </div>
      )}
    </main>
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-status" element={<CaseStatus />} />
          <Route path="/legal-toolkit" element={<LegalToolkit />} />
          <Route path="/emotional-support" element={<EmotionalSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
