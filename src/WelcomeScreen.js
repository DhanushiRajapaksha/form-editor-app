import React, { useState } from 'react';
import './App.css';

const WelcomeScreen = ({ onSubmit }) => {
  const [settings, setSettings] = useState({
    welcomeMessage: 'Welcome to the Form Editor',
    formTitle: 'New Form',
  });

  
  const [image, setImage] = useState(null);

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the image data URL to preview the image
      };
      reader.readAsDataURL(file); // Convert the image to a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(settings);
  };


  return (
    <div className="welcome-screen">
      <div className="editor-section">
        <h1>Edit Form Settings</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Welcome Message:</label>
            <input
              type="text"
              name="welcomeMessage"
              value={settings.welcomeMessage}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Form Title:</label>
            <input
              type="text"
              name="formTitle"
              value={settings.formTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          <button type="submit">Save Settings</button>
        </form>
        

        
        
      </div>

      {/* Live Preview */}
      <div className="preview-section">
        <div className="preview-container">
          <h1>{settings.welcomeMessage}</h1>
          <h3>{settings.formTitle}</h3>
          <button type="submit">Start</button>
          
          
        </div>
        <div className="img">
          {image && (
            <img
              src={image}
              alt="Uploaded Preview"
              className="preview-image"
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
            )}
            </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
