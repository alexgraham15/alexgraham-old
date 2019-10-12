import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../../index.css'
import { connect } from 'react-redux'
import { userScrollStart, userScrollFinish, userPageNumberIncrease } from '../../Actions/scrollActions'
import { openMenu, closeMenu } from '../../Actions/menuActions'
import { bindActionCreators } from 'redux'
import Hero from './heroComponent'
import Projects from './Projects'
import AboutMe from './AboutMe'
import CV from './CV'
import Contact from './Contact'
import Menu from './menuComponent'
// const HeroPromise = import("./heroComponent");
// const Hero = React.lazy(() => HeroPromise);
// const ProjectsPromise = import("./Projects");
// const Projects = React.lazy(() => ProjectsPromise);
// const AboutMePromise = import("./AboutMe");
// const AboutMe = React.lazy(() => AboutMePromise);
// const CVPromise = import("./CV");
// const CV = React.lazy(() => CVPromise);
// const ContactPromise = import("./Contact");
// const Contact = React.lazy(() => ContactPromise);
// const MenuPromise = import("./menuComponent");
// const Menu = React.lazy(() => MenuPromise);

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

const AnimatedRoute = (props) => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}>
    <Route {...props} />
  </div>
);

const AnimatedSwitch = ({ animationClassName, animationTimeout, children }) => (
  <Route render={({ location }) => (
    <TransitionGroup style={{
      flex: 1,
      position: 'relative',
    }}>
      <CSSTransition
        key={location.key}
        timeout={animationTimeout}
        classNames={animationClassName}
      >
        <Switch location={location}>
          {children}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )} />
);

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
    return(
      <Router>
        {/* <Suspense fallback={<h1>Still Loading…</h1>}> */}
        <Route path="/" render={(props) => <Menu {...props} nav={this.props}/>}  />
        <div className="App">
        <AnimatedSwitch 
          animationClassName="page-slide" 
          animationTimeout={500}
        >
            <AnimatedRoute  exact path="/" render={(props) => <Hero className={"Hero "+this.props.menuVisable} {...props} nav={this.props}/>}  />
            <AnimatedRoute  exact path="/AboutMe" render={(props) => <AboutMe className={"AboutMe "+this.props.menuVisable} {...props} nav={this.props}/>}/>
            <AnimatedRoute  exact path="/Projects" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
            <AnimatedRoute  exact path="/CV" render={(props) => <CV className={"CV "+this.props.menuVisable} {...props} nav={this.props}/>}/>
            <AnimatedRoute  exact path="/Contact" render={(props) => <Contact className={"Contact "+this.props.menuVisable} {...props} nav={this.props}/>}/>
          </AnimatedSwitch>
          </div>
          {/* </Suspense> */}
      </Router>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
