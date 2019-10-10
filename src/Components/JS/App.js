import React, { Component } from 'react'
import { fadeIn, fadeOut } from 'react-animations'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { keyframes, css } from 'styled-components'
import '../CSS/Hero.css'
import { connect } from 'react-redux'
import { userScrollStart, userScrollFinish, userPageNumberIncrease } from '../../Actions/scrollActions'
import { openMenu, closeMenu } from '../../Actions/menuActions'
import { bindActionCreators } from 'redux'
import Hero from './heroComponent'
import Projects from './Projects'
import Menu from './menuComponent'
const supportsHistory = 'pushState' in window.history;

//Connector Properties and Dispatch Events
function mapStateToProps(store) {
  return { 
    scrolling: store.pageLayout.scrolling,
    position: store.pagePosition.position,
    menu: store.menuLayout.menuOpen,
    menuVisable: store.menuLayout.menuVisable
  }
}
function mapDispatchToProps(dispatch) { 
  return { 
    dispatch, 
    userScrollStart:bindActionCreators(userScrollStart, dispatch),
    userScrollFinish:bindActionCreators(userScrollFinish, dispatch),
    userPageNumberIncrease:bindActionCreators(userPageNumberIncrease, dispatch),
    menuOpen:bindActionCreators(openMenu, dispatch),
    menuClose:bindActionCreators(closeMenu, dispatch)
  } 
}
//CSS Animations to fade in and out
const animationDelay = css`
  animation-delay:3s;
  opacity:0;
`
const FadeOut = styled.div`animation: ${keyframes`${fadeOut}`} 3s forwards; height:0px;width:0px;`
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
    // const { pathname } = this.location;
    
    return(
      
        <Router forceRefresh={!supportsHistory} render={({ location }) => {
          const { pathname } = location;
          return (
            // <Route path="/" render={(props) => <Menu {...props} nav={this.props}/>}  />
            <TransitionGroup>
              <CSSTransition 
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 1000,
                  exit: 1000,
                }}
              >
          

            <div className="App">
              <Switch>
                <Route exact path="/" render={(props) => <Hero className={"Hero "+this.props.menuVisable} {...props} nav={this.props}/>}  />
                <Route exact path="/AboutMe" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
                <Route exact path="/Projects" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
                <Route exact path="/CV" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
                <Route exact path="/Contact" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
              </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
          )}}
          />
        
   
    )
    // if(!this.props.scrolling && this.props.position == 0){
    //   return(
    //     <div className="App" ref={el => (this.instance = el)}  onWheel = {(e) => this.componentWillScroll(e)}>
    //       <Menu {...this.props}/>
    //       <Hero className={"Hero "+this.props.menuVisable} {...this.props}></Hero> 
    //     </div>
    //   )
    // }else if(this.props.scrolling && this.props.position == 1){
    //   return(
    //     <div className="App" ref={el => (this.instance = el)}  onWheel = {(e) => this.componentWillScroll(e)}>
    //       <Menu {...this.props}/>
    //       {/* <FadeOut className={this.props.menuVisable}>
    //         <Hero className="Hero" {...this.props}></Hero>
    //       </FadeOut> */}
    //       {/* <FadeIn className={"Projects "+this.props.menuVisable}> */}
    //         <Projects className={"Projects "+this.props.menuVisable} {...this.props}></Projects>
    //       {/* </FadeIn> */}
    //     </div>
    //   )
    // }else{
    //   return(
    //     <div>End</div>
    //   )
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
