import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import styled from 'styled-components'

const Container = styled.div({
  width:"100%"
})

const Paragraph = styled.p({
  padding:"10px 40px",
  textAlign:'left'
})

class AboutMe extends Component {
  render(){
    return (
      <Container className={ this.props.className }>
        <header className="AboutMe-header">
          <h1 className="title">
            ABOUT ME
          </h1>
          <Paragraph>
            Hi, I'm Alex, I make websites&#x21; I call the Peak District home but have worked in many places on many different projects.
          </Paragraph>
          <div className='stackRow'>
          <div className="halfContainer">
          <Paragraph>
           <i> Why full stack?</i>
            <br />
            A love of learning new technologies, techniques and build patterns - jack of all trades, master of a growing list
            </Paragraph>
            <Paragraph >
              <i>Where did I learn?</i>
              <br />
              I'm self taught. I've worked in several different industries and each time ended up with significant web development time. 
              Over 7 years of hands on development time to be exact! In languages ranging from PHP to Node JS, React-Redux and more.
            </Paragraph>
            <Paragraph>
            <i>Work Principles?</i>
              <br />
              I work on projects I truely believe in. It motivates and inspirers creativity. Obviously clean, usable UX and UI with well documented code is high on the list but when is it not?
            </Paragraph>
            </div>
            <Paragraph className="halfContainer">Placeholder </Paragraph>
            </div>
        </header>
      </Container>
    );
  }
}

export default AboutMe;
