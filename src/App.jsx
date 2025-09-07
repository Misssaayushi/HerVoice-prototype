import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatDetail from './components/ThreatDetail';
import SuspectDetail from './components/SuspectDetail';
import ImageUpload from './components/ImageUpload';
import Submission from './components/Submission';
import UserCredential from './components/UserCredential';
import AiScan from './components/AiScan'; // Import the AiScan component

// Placeholder components for the other pages
const CaseStatus = () => <div className="page-container"><h2>Case Status</h2><p>Check the status of your case here.</p></div>;
const LegalToolkit = () => <div className="page-container"><h2>Legal Toolkit</h2><p>Resources and legal information to help you.</p></div>;
const EmotionalSupport = () => <div className="page-container"><h2>Emotional Support</h2><p>Find support and resources to help you through this difficult time.</p></div>;

const AppContent = ({ homeClicked, onHomeClick, isAuthenticated, setIsAuthenticated }) => {
  const [step, setStep] = useState(0);
  const [showAiScan, setShowAiScan] = useState(false);
  const [reportData, setReportData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (homeClicked) {
      setStep(0);
      setShowAiScan(false);
      onHomeClick();
    }
  }, [homeClicked, onHomeClick]);

  useEffect(() => {
    if (location.pathname === '/report-threat') {
      setStep(1);
      navigate('/');
    }
  }, [location, navigate]);

  const handleGetStarted = () => {
    setStep(1);
  };

  const handleAiScan = () => {
    setShowAiScan(true);
  };

  const handleAiScanComplete = () => {
    setShowAiScan(false);
    setStep(0); // Go back to the homepage
  };

  const handleCredentialSubmit = (formData, isLogin) => {
    console.log({ formData, isLogin });
    setIsAuthenticated(true);
    setStep(0);
  };

  const handleNext = (data) => {
    setReportData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormSubmit = () => {
    console.log('Final Report Data:', reportData);
    setStep(5);
  };

  const renderContent = () => {
    if (showAiScan) {
      return <AiScan onComplete={handleAiScanComplete} />;
    }

    switch (step) {
      case 0:
        return <Hero onGetStarted={handleGetStarted} isAuthenticated={isAuthenticated} onAiScan={handleAiScan} />;
      case 1:
        return <UserCredential onFormSubmit={handleCredentialSubmit} onBack={handleBack} />;
      case 2:
        return <ThreatDetail onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <SuspectDetail onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <ImageUpload onNext={handleFormSubmit} onBack={handleBack} />;
      case 5:
        return <Submission reportData={reportData} />;
      default:
        return <Hero onGetStarted={handleGetStarted} isAuthenticated={isAuthenticated} onAiScan={handleAiScan} />;
    }
  };

  return <main className="app-main">{renderContent()}</main>;
};

AppContent.propTypes = {
  homeClicked: PropTypes.bool.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
};

function App() {
  const [homeClicked, setHomeClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleHomeClick = () => {
    setHomeClicked(true);
  };

  const resetHomeClick = () => {
    setHomeClicked(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onHomeClick={handleHomeClick} />
        <Routes>
          <Route path="/*" element={<AppContent homeClicked={homeClicked} onHomeClick={resetHomeClick} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/case-status" element={<CaseStatus />} />
          <Route path="/legal-toolkit" element={<LegalToolkit />} />
          <Route path="/emotional-support" element={<EmotionalSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
