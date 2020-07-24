import React from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from './logo.svg';
import './App.css';

const CustomToast =({closeToast})=>{
  return (
    <div>
      <h2>Somthing went wrong </h2>
      <button onClick={closeToast}>close</button>
    </div>
  )
 } 
toast.configure()
function App() {  
  const notyfy =()=>{
    toast('Basic Notification',{position:toast.POSITION.TOP_RIGHT})
    toast.success('Success  Notification',{
      position:toast.POSITION.TOP_CENTER,
      autoClose:8000
    })
    toast.info('Info Notification',{
      position:toast.POSITION.TOP_LEFT,
      autoClose:false
    })
    toast.warn(<CustomToast/>,{position:toast.POSITION.BOTTOM_LEFT})
    toast.error('Error  Notification',{position:toast.POSITION.BOTTOM_CENTER})
    toast('Basic Notification',{position:toast.POSITION.BOTTOM_RIGHT})
  }
  return (
    <div className="App">
     <button onClick={notyfy}>Notify!</button>
    </div>
  );
}

export default App;
