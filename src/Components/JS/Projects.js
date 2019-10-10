import React, { Component } from 'react';
import '../CSS/Projects.css';

class Project extends Component {
  componentWillScroll(){
    this.props.nav.userScrollStart()
    this.props.nav.userPageNumberIncrease()
  }
  render(){
    return (
      <div className={ this.props.nav.className }>
        <header className="Projects-header">
          <h1>
            PROJECTS
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Porttitor eget dolor morbi non arcu risus quis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Neque viverra justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Nulla pharetra diam sit amet nisl suscipit adipiscing. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Sed viverra tellus 
          </p>
          <svg onClick={this.componentWillScroll.bind(this)} className="mouse scroll-link scroll-link-projects" xmlns="..." viewBox="0 0 76 130">
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
