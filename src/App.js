import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hero() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to<i id="titleCompany">A &amp; A Graham Ltd</i>IT Contractors and Website Builders.
        </p>
        <p>
          Scroll Down<br/>
          for more information
        </p>
      </header>
    </div>
  );
}

export default Hero;
