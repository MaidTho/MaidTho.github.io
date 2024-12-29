//import React from 'react';
import logo from './Images/LogoRender.png';
import './App.css';
import './index.css';
/*import './script.js';*/

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <canvas id="connected-dots"></canvas>
        <script src="script.js"></script>  
        <br></br>
        <h1><b>MadeToProject</b></h1>
        <h1>Hello I'm <span>Tom</span>!&#x1F44B;</h1>
        <h2>I am a Frontend Software Engineer from <span>Adelaide</span>, South Australia!</h2>
        <br></br>
    </header>
    </div>
  );
}

export default App;
