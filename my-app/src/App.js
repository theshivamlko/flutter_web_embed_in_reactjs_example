import logo from './logo.svg';
 
import './App.css'; 
import  { useEffect } from 'react'

import {useState} from 'react';

function App() {
  const [input,setInput]=useState("")
  const [output,setOutput]=useState("")

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInput(newValue); // Update the input state
      functionName(newValue); // Call your external function
    };

   
  useEffect(() => {
    // Callback function to receive messages from Flutter
    const receiveMessage = (receivedMessage) => {
      console.log("Received message from Flutter:", receivedMessage);
      setOutput(receivedMessage);
 
    };

    // Assign the callback function to the global object
    window.flutterToReact = receiveMessage;  
  }, []); 

    const newStyles = {
      width: '100%', // New style
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter Message.
        </p>

        <div>
          <input name='name' placeholder='Enter Message' 
         
         onChange={handleInputChange}  />
          <p>{output}</p>
        </div>
      </header>
    </div>
  );
}

// style={{
//   width: '200px', // Original style
//   width: '100%', // New style
//   padding: '12px 20px',
//   margin: '8px 0',
//   display: 'inline-block',
//   border: '1px solid #ccc',
//   borderRadius: '4px',
//   boxSizing: 'border-box'
// }} 

export default App;
