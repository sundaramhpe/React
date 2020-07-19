import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Greet}  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App"> 
    <NameList/>
    {/* {<UserGreetings/>} */}
     {/* <Counter/> */}
     {/*<ParentComponent/>*/}
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
