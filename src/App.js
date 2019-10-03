import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hero() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 class="overlay">
            <span>Alex Graham</span>
          </h1>
        <p>
          IT Contractor and Full Stack Developer
        </p>
        <svg class="mouse scroll-link" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet">
          <g fill="none" fill-rule="evenodd">
            <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36"/>
            <circle class="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
          </g>
        </svg>
      </header>
    </div>
  );
}

export default Hero;
