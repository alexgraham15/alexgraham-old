import React, { Component } from 'react'
import './App.css';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false }
  }

  componentDidMount() {
    //Add script for title animation
    const script = document.createElement("script");
    script.src = "/firstPage.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    //Add scroll event listener to enable Hero component to be removed on scroll
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    //Remove scroll event listener to prevent false removal 
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = (event) => {
    //Add new component, scroll and remove Hero component
      this.setState({
        ...this.state,
        isScrolled: true
      })
  };

  appendChild(){

  }

  render(){
    return (
    <div className="App" ref={el => (this.instance = el)} >
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
    )
  };
}

export default Hero;
