import React,{forwardRef} from 'react';
import Tippy from '@tippy.js/react'
import logo from './logo.svg';
import './App.css';
import 'tippy.js/dist/tippy.css'

function App() {
  const ColoredTooltip = () => {
    return <span style={{ color: 'yellow' }}>Colored component</span>
  }
  const CustomChild = forwardRef((props,ref)=>{
    return (
      <div ref={ref}>
        <div> Frirst Line </div>
        <div> Second Line </div> 
      </div>
    )
  })
  return (
    <div className="App">
      {/* set the tooltip content  */}
      <div style={{ paddingBottom: '20px' }}>
       {/* Palcemnet left,right,top and bottom */}
        <Tippy placement='right' arrow={false} delay={1000} content='Basic Tooltip'>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement='top-start' content={<span style={{ color: 'orange' }}>Colored </span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
