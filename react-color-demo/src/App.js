import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChromePicker } from 'react-color'

function App() {
  //set the color the default value is white
  const [color, setColor] = useState('#fff')
  //toggle visibility of color picker for that open another useState
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div>
      {/* the button values depends on state variable */}
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>

      {
        showColorPicker && <ChromePicker
        color={color}
        onChange={updatedColor => setColor(updatedColor.hex)}
      />
      }      
      {/* Display the selected color */}
      <h2>you picked {color}</h2>
    </div>
  );
}

export default App;
