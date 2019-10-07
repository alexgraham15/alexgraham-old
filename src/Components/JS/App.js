import React, { Component } from 'react'
import { fadeIn, fadeOut } from 'react-animations'
import styled, { keyframes, css } from 'styled-components'
import '../CSS/Hero.css'
import { connect } from 'react-redux'
import { userScrollStart, userScrollFinish, userPageNumberIncrease } from '../../Actions/scrollActions'
import { bindActionCreators } from 'redux'
import Hero from './heroComponent'
import Projects from './Projects'

//Connector Properties and Dispatch Events
function mapStateToProps(store) {
  return { 
    scrolling: store.pageLayout.scrolling,
    position: store.pagePosition.position,
  }
}
function mapDispatchToProps(dispatch) { 
  return { 
    dispatch, 
    userScrollStart:bindActionCreators(userScrollStart, dispatch),
    userScrollFinish:bindActionCreators(userScrollFinish, dispatch),
    userPageNumberIncrease:bindActionCreators(userPageNumberIncrease, dispatch),
  } 
}
//CSS Animations to fade in and out
const animationDelay = css`
  animation-delay:3s;
  opacity:0;
`
const FadeOut = styled.div`animation: ${keyframes`${fadeOut}`} 3s forwards; height:0px;`
const FadeIn = styled.div`
  animation: ${keyframes`${fadeIn}`} 3s forwards;
  ${animationDelay}
`
//Main Class
class MainContainer extends Component {
  componentDidMount() {
    //Add script for title animation
    const script = document.createElement("script")
    script.src = "/firstPage.js"
    script.async = true
    script.type = "text/javascript"
    document.body.appendChild(script)
  }
  componentWillScroll(){
      this.props.userScrollStart()
      this.props.userPageNumberIncrease()
  }

  render(){
    console.log(this.props)
    if(!this.props.scrolling && this.props.position == 0){
      return(
        <div className="App" ref={el => (this.instance = el)}  onWheel = {(e) => this.componentWillScroll(e)}>
          <Hero scrolling={this.props.scrolling} props={this.props}></Hero> 
        </div>
      )
    }else if(this.props.scrolling && this.props.position == 1){
      return(
        <div className="App" ref={el => (this.instance = el)}  onWheel = {(e) => this.componentWillScroll(e)}>
        <FadeOut>
          <Hero scrolling={this.props.scrolling} props={this.props}></Hero>
        </FadeOut>
        <FadeIn>
          <Projects scrolling={this.props.scrolling} props={this.props}></Projects>
        </FadeIn>
        </div>
      )
    }else{
      return(
        <div>End</div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
