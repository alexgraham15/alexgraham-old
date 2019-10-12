import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const Wrapper = styled.div({
    padding:"10px 40px",
    width: 'calc(100% - 80px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  })
  
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    }
  
    render() {
      return (
        <Wrapper>
          <SimpleSlider settings={this.settings} />
         </Wrapper> 
      );
    }
  }
  
  class SimpleSlider extends React.Component {
    render () {
      return (
        <Slider {...this.props.settings}>
          <div className="slide-0"><h3>Graph 1</h3></div>
          <div className="slide-1"><h3>Graph 2</h3></div>
          <div className="slide-2"><h3>Graph 3</h3></div>
          <div className="slide-3"><h3>Set Up</h3></div>
        </Slider>
      )
    }
  }  

  export default Parent