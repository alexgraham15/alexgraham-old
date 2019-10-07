import React, { Component } from 'react';
import '../CSS/Projects.css';

class Project extends Component {
  componentWillScroll(){
    this.props.props.userScrollStart()
    this.props.props.userPageNumberIncrease()
  }
  render(){
    return (
      <div className="Projects">
        <header className="Projects-header">
          <h1>
            PROJECTS
          </h1>
          <p>
            
          </p>
          <svg onClick={this.componentWillScroll.bind(this)} className="mouse scroll-link" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet">
            <g fill="none" fillRule="evenodd">
              <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"/>
              <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
            </g>
          </svg>
        </header>
      </div>
    );
  }
}

export default Project;
