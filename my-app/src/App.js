import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [input,setInput]=useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <input name='name' placeholder='Content'
          onChange={(e)=>setInput(e.target.value)}/>
          <p>{input}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
