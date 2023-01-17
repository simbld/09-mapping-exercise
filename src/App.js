import React from 'react';
import ContactInfoList from './components/ContactList';
import './style.css';

function App() {
  return (
    <>
      <div className="titre-container">
        <h1 className="text-center">My contacts list 📱</h1>

        <div>
          <ContactInfoList />
        </div>
      </div>
    </>
  );
}

export default App;
