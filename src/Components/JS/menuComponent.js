import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import styled, { keyframes, css } from 'styled-components'

const MenuBar = styled.span({
  width:"30px",
  height:"1px",
  backgroundColor:"#fff",
  margin: "auto",
  transform: "rotate(0deg) translateY(0px)",
  transition: "width 1s, transform 1s ease"
})

const MenuButton = styled.div({
  animation: "${keyframes`${fadeIn}`} 3s forwards",
  width:"30px",
  height:"30px",
  display:"flex",
  flexDirection:"column",
  justifyContent: "flex-start",
  position: "absolute",
  top:"30px",
  left:"40px",
  cursor:"pointer",
  [`:hover ${MenuBar}:nth-child(1)`]: {
    transform: "rotate(45deg) translateY(10px)",
    transitionDuration: "1s",
    width:"40px"
  },
  [`:hover ${MenuBar}:nth-child(2)`]: {
    transform: "rotate(-45deg) translateY(-10px)",
    transitionDuration: "1s",
    width:"40px"
  }
})

const MainMenu = styled.div({

})

class Menu extends Component {
  
    onMenuOpen(){
      switch (this.props.props.props.menu){
        case true: {
          // console.log(this.props.props)
            return this.props.props.props.menuClose()
        }
        case false: {
            return this.props.props.props.menuOpen()
        }
    } 
    }
    render(){
        return (
            <MenuButton onClick={this.onMenuOpen.bind(this)}>   
                <MenuBar />
                <MenuBar />
            </MenuButton>
        )
    }
}
export default Menu