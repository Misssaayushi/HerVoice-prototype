import React, { useState } from 'react';

const BlackmailerForm = ({ onFormSubmit }) => {
  const [suspectName, setSuspectName] = useState('');
  const [suspectContact, setSuspectContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ suspectName, suspectContact });
  };

  return (
    <div className="form-container">
      <h2>Blackmailer Contact Information</h2>
      <p>Please provide any information you have about the person blackmailing you.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Suspect's Name"
          value={suspectName}
          onChange={(e) => setSuspectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Suspect's Phone or Email"
          value={suspectContact}
          onChange={(e) => setSuspectContact(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlackmailerForm;