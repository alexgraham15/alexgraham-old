import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import styled, { keyframes, css } from 'styled-components'

const MenuBar = styled.span`
  animation: ${keyframes`${fadeIn}`} 3s forwards;
  width:30px;
  height:1px;
  background-color:#fff;
`

const MenuButton = styled.div`
  width:30px;
  height:30px;
`

class Menu extends Component {
    render(){
        return (
            <MenuButton>   
                <MenuBar />
                <MenuBar />
            </MenuButton>
        )
    }
}
export default Menu