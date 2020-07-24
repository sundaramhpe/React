import React from 'react';
import Modal from 'react-modal'
import logo from './logo.svg';
import './App.css';

Modal.setAppElement('#root')
function App() {  
  return (
    <div className='App'>
      {/* First set the is opentype is true in model tag */}
      <Modal isOpen={true}>
        <h2>Modal Title </h2>
        <p>Modal Body </p>
      </Modal>        
     
    </div>
  );
}

export default App;
