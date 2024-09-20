import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import EmailScreen from './EmailScreen';

function App() {
  const [page, setPage] = useState('welcome');

  const handleSettingsSubmit = (settings) => {
    console.log('Settings submitted:', settings);
  };

  return (
    <div className="App">
      <div className="navigation">
        <button onClick={() => setPage('welcome')}>Welcome Screen</button>
        <button onClick={() => setPage('email')}>Email Screen</button>
      </div>
      
      {page === 'welcome' ? (
        <WelcomeScreen onSubmit={handleSettingsSubmit} />
      ) : (
        <EmailScreen onSubmit={handleSettingsSubmit} />
      )}

      
    </div>
  );
}

export default App;
