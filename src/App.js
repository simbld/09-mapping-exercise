import React from 'react';
import ContactInfoList from './components/ContactList';
import './style.css';

function App() {
  return (
    <>
      <div>
        <h1>My contacts list 📱</h1>

        <div id="container">
          <ContactInfoList />
        </div>
      </div>
    </>
  );
}

export default App;
