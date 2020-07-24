import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdleTimer from 'react-idle-timer';
import IdleTimerContainer from './components/IdleTimerContainer';

function App() {
  return (
    <div className="App">
      <IdleTimerContainer />
    </div>
  );
}

export default App;
