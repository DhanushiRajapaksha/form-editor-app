import React, { useState } from 'react';
import './App.css';

const EmailScreen = ({ onSubmit }) => {
  const [email] = useState('');
  const [setEmailError] = useState('');
  const [settings, setSettings] = useState({
    emailMessage: 'Enter your email below',
    buttonLabel: 'Submit',
  });

 
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      onSubmit(settings);
    } else {
      setEmailError('Please enter a valid email before submitting.');
    }
  };

  return (
    <div className="email-screen">
      <div className="editor-section">
        <h1>Edit Email Settings</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Message:</label>
            <input
              type="text"
              name="emailMessage"
              value={settings.emailMessage}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Button Label:</label>
            <input
              type="text"
              name="buttonLabel"
              value={settings.buttonLabel}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Save Settings</button>
        </form>
      </div>

      {/* Live Preview */}
      <div className="preview-section">
        
        <div className="preview-container">
          <h1>{settings.emailMessage}</h1>
          <input type="email" placeholder="Enter your email" value={email} disabled />
          <button>{settings.buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default EmailScreen;
