import React, { useState } from 'react';
import Modal from 'react-modal'
import logo from './logo.svg';
import './App.css';

Modal.setAppElement('#root')
function App() {
  const [modelIsOpen, setModelIsOpen] = useState(false)
  return (
    <div className='App'>
      {/* First set the is opentype is true in model tag */}
      <button onClick={() => setModelIsOpen(true)}>Open Model</button>
      <Modal isOpen={modelIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModelIsOpen(false)}
        // key and value pair
        style={

          {
            overlay:{
              backgroundColor:'gray'
            },
            content:{
              color:'orange'
            }
          }
        }
        >
        <h2>Modal Title </h2>
        <p>Modal Body </p>
        <div>
          <button onClick={() => setModelIsOpen(false)}>Close</button>
        </div>
      </Modal>

    </div>
  );
}

export default App;
