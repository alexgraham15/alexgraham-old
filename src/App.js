import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hero() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 id="nameAnimation">
            <span id="firstname">Alex</span> <span id="lastnameHolder"><span id="lastname">Graham</span></span>
          </h1>
        <p>
          IT Contractor and Website Builder
        </p>
      </header>
    </div>
  );
}

export default Hero;
