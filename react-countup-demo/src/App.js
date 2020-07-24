import React from 'react';
import CountUP, { useCountUp } from 'react-countup'
import logo from './logo.svg';
import './App.css';

function App() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 5000,
    startOnMount: false
  })
  return (
    <div className="App">

      <div>
        <h1>{countUp}</h1>
        <button onClick={start}> Start </button>
        <button onClick={reset}> Reset </button>
        <button onClick={pauseResume}> Pause /Resume </button>
        <button onClick={() => update(2000)}> Update to 2000 </button>
      </div>
      <h1>
        <CountUP end={200} />
      </h1>
      <br />
      <h1>
        <CountUP end={200} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUP start={500} end={1000} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUP end={1000} duration={5} prefix='$' decimals={2} />
      </h1>
      <h1>
        <CountUP end={1000} duration={5} suffix='USD' decimals={2} />
      </h1>
    </div>
  );
}

export default App;
