import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Greet}  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">    
     {/* <Counter/> */}
     <ParentComponent/>
     { /* <Greet name='Sundar'>
     <p>This is Child Tags</p>
   </Greet>
   <Greet name ='Viji'>
     <button>Action</button>
   </Greet>
   <Greet name='Jai'/>
   <Welcome name='Sundar'>
     </Welcome> 
     <Welcome name='Viji'>
     </Welcome> 
     <Welcome name='Jai'>
     </Welcome> 
     <Hello/>
  <Message></Message>  */ }
    </div>
  );
}

export default App;
