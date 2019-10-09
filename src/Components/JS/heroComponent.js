import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import styled, { keyframes, css } from 'styled-components'
import Menu from './menuComponent'

const animationDelay = css`
  animation-delay:6s;
  opacity:0;
`

const FadeIn = styled.div`
  animation: ${keyframes`${fadeIn}`} 3s forwards;
  ${animationDelay}
`

class Hero extends Component {
    componentWillScroll(){
        this.props.props.userScrollStart()
        this.props.props.userPageNumberIncrease()
    }
    
    render(){
      const scrolling = this.props.scrolling
      if(!scrolling){
        return (
          <div className="Hero">
            <header className="Hero-header">
                <Menu />
                <h1 className="overlay">
                  <span>Alex Graham</span>
                </h1>
              <FadeIn>
                <p>
                  Full Stack Developer
                </p>
              </FadeIn>
              <svg onClick={this.componentWillScroll.bind(this)} className="mouse scroll-link scroll-link-hero" xmlns="..." viewBox="0 0 76 130">
                <g fill="none" fillRule="evenodd">
                  <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"/>
                  <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                </g>
              </svg>
            </header>
          </div>
          )
      }else{
        return (
          <div className="Hero">
            <header className="Hero-header">
                <h1>
                  <span>Alex Graham</span>
                </h1>
                <p>
                  Full Stack Developer
                </p>
              <svg className="mouse scroll-link scroll-link-hero" xmlns="..." viewBox="0 0 76 130">
                <g fill="none" fillRule="evenodd">
                  <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"/>
                  <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                </g>
              </svg>
            </header>
          </div>
          )
      }
    };
  }

  export default Hero