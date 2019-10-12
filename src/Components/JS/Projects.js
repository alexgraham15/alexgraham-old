import React, { Component } from 'react';
import '../CSS/Projects.css';
import styled from 'styled-components'
import Slider from './Slider'

const Container = styled.div({
  width:"100%"
})

const Paragraph = styled.p({
  padding:"10px 40px",
  textAlign:'left'
})

class Project extends Component {
  componentWillScroll(){
    this.props.nav.userScrollStart()
    this.props.nav.userPageNumberIncrease()
  }
  render(){
    return (
      <Container className={ this.props.className }>
        <header className="Projects-header">
          <h1 className="title">
            PROJECTS
          </h1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Porttitor eget dolor morbi non arcu risus quis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Neque viverra justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Nulla pharetra diam sit amet nisl suscipit adipiscing. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Sed viverra tellus 
          </Paragraph>
          <Slider />
        </header>
      </Container>
    );
  }
}

export default Project;
