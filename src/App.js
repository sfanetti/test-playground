import './App.css';
import { useState } from 'react';
import CheckBlock from './components/CheckBlock';

function getOppositeColor (color) {
  return color === 'blue' ? 'green' : 'blue';
}

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const [isDisabled, setIsDisabled] = useState(false);
  function changeButtonColor(e) {
    e.preventDefault();
    const newColor = getOppositeColor(buttonColor)
    setButtonColor(newColor);
  }

  const inverseColor = getOppositeColor(buttonColor);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Playground</h1>
        <button 
          type='button'
          data-test-button-switch-color
          aria-label='switch colors'
          disabled={isDisabled}
          style={{backgroundColor: buttonColor}}
          onClick={changeButtonColor}>
            Change button color to {inverseColor}
        </button>
        <CheckBlock isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
      </header>
    </div>
  );
}

export default App;
