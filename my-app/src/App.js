import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [input,setInput]=useState("")

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInput(newValue); // Update the input state
      functionName(newValue); // Call your external function
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <input name='name' placeholder='Content'
         onChange={handleInputChange}  />
          <p>{input}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
