import React, { Component } from 'react';
import './App.css';
import Experience from './Projects';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
       {this.state.isScrolled && <Experience />}
      </div>
    );
  }
}

export default AboutUs;
