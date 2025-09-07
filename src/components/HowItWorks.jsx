import React, { useEffect } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  useEffect(() => {
    const showYesBtn = document.getElementById('show-yes-btn');
    const showNoBtn = document.getElementById('show-no-btn');
    const outcomeYes = document.getElementById('outcome-yes');
    const outcomeNo = document.getElementById('outcome-no');
    const branchYes = document.getElementById('branch-line-yes');
    const branchNo = document.getElementById('branch-line-no');

    const showOutcome = (outcome) => {
      if (outcome === 'yes') {
        outcomeYes.classList.remove('hidden');
        outcomeNo.classList.add('hidden');

        showYesBtn.classList.add('active-yes');
        showNoBtn.classList.remove('active-no');

        branchYes.style.borderColor = '#22c55e';
        branchNo.style.borderColor = '#e2e8f0';

      } else if (outcome === 'no') {
        outcomeNo.classList.remove('hidden');
        outcomeYes.classList.add('hidden');

        showNoBtn.classList.add('active-no');
        showYesBtn.classList.remove('active-yes');

        branchNo.style.borderColor = '#ef4444';
        branchYes.style.borderColor = '#e2e8f0';
      }
    };

    showYesBtn.addEventListener('click', () => showOutcome('yes'));
    showNoBtn.addEventListener('click', () => showOutcome('no'));

    // Set initial state to show the 'yes' path by default
    showOutcome('yes');
  }, []);

  return (
    <div className="how-it-works-container">
      <header className="mb-16">
        <h1 className="header-title">How <span className="highlight">HerVoice</span> Protects You</h1>
        <p className="header-subtitle">An interactive guide to our reporting process. See how we partner with platforms like WhatsApp to take action, while prioritizing your safety.</p>
      </header>

      <main id="flowchart" className="flex flex-col items-center">

        {/* Step 1: Incident */}
        <div id="step-1" className="flow-step">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <h3 className="step-title">1. An Incident Occurs</h3>
          <p className="step-description">A user receives an abusive image and a threat on WhatsApp.</p>
        </div>
        <div className="connector arrow" style={{ height: '10px' }}></div>

        {/* Step 2: Report */}
        <div id="step-2" className="flow-step">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h3 className="step-title">2. You Report to HerVoice</h3>
          <p className="step-description">Securely submit the evidence (image, chat details) to the HerVoice platform.</p>
        </div>
        <div className="connector arrow" style={{ height: '10px' }}></div>

        {/* Step 3: Hashing */}
        <div id="step-3" className="flow-step">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h3 className="step-title">3. Secure Hashing</h3>
          <p className="step-description">HerVoice creates a unique digital fingerprint (a hash) of the image. <span className="font-semibold">The image is never stored.</span></p>
        </div>
        <div className="connector arrow" style={{ height: '10px' }}></div>

        {/* Step 4: API */}
        <div id="step-4" className="flow-step">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h3 className="step-title">4. Sending the Hash</h3>
          <p className="step-description">Only the anonymous hash is sent to WhatsApp through a secure, private API.</p>
        </div>
        <div className="connector arrow" style={{ height: '10px' }}></div>

        {/* Step 5: Decision Point */}
        <div id="step-5" className="flow-step">
          <div className="icon-container">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h3 className="step-title">5. WhatsApp Checks its Database</h3>
          <p className="step-description">WhatsApp compares the hash against its database of known abusive content.</p>
          <p className="prompt-text">Click to see the possible outcomes.</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button id="show-yes-btn" className="decision-btn">Match Found</button>
            <button id="show-no-btn" className="decision-btn">No Match</button>
          </div>
        </div>

        {/* Connector to branching paths */}
        <div className="w-full max-w-lg relative" style={{ height: '40px' }}>
          <div className="connector absolute left-1/2 -translate-x-1/2 h-full"></div>
          <div id="branch-line-yes" className="absolute top-0 left-0 w-1/2 h-full border-b-2 border-r-2 border-gray-300 rounded-br-lg"></div>
          <div id="branch-line-no" className="absolute top-0 right-0 w-1/2 h-full border-b-2 border-l-2 border-gray-300 rounded-bl-lg"></div>
        </div>

        {/* Outcome Paths */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mt-4">

          {/* YES Path */}
          <div id="outcome-yes" className="outcome-path w-full flex-1">
            <div className="flex flex-col items-center">
              <div className="connector arrow" style={{ height: '10px' }}></div>
              <div id="step-6" className="flow-step">
                <div className="icon-container">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="step-title">Action is Taken</h3>
                <p className="step-description">WhatsApp blocks the image and restricts the blackmailer’s account.</p>
              </div>
              <div className="connector arrow" style={{ height: '10px' }}></div>
              <div id="step-7" className="flow-step">
                <div className="icon-container">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="step-title">You Are Informed</h3>
                <p className="step-description">HerVoice confirms that action has been taken and your image is protected.</p>
              </div>
            </div>
          </div>

          {/* NO Path */}
          <div id="outcome-no" className="outcome-path w-full flex-1">
            <div className="flex flex-col items-center">
              <div className="connector arrow" style={{ height: '10px' }}></div>
              <div id="step-8" className="flow-step">
                <div className="icon-container">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="step-title">No Match Found</h3>
                <p className="step-description">The image hash is new to the database. No immediate action is taken by WhatsApp.</p>
              </div>
              <div className="connector arrow" style={{ height: '10px' }}></div>
              <div id="step-9" className="flow-step">
                <div className="icon-container">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 0116 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="step-title">Future Monitoring</h3>
                <p className="step-description">The new hash is added to the database to prevent future spread and monitor for matches.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
