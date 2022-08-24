import './App.css';
import { useState } from 'react';
import CheckBlock from './components/CheckBlock';

function getOppositeColor (color) {
  return color === 'blue' ? 'green' : 'blue';
}

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const [isDisabled, setIsDisabled] = useState(false);
  function changeButtonColor() {
    const newColor = getOppositeColor(buttonColor)
    setButtonColor(newColor);
  }

  const inverseColor = getOppositeColor(buttonColor);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Playground</h1>
        {
          // Add your button and checkbox here
        }
      </header>
    </div>
  );
}

export default App;
