import React, { Component } from 'react';


// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentImg: 1
    }
  }

  leftClick = () => {
    if(this.state.currentImg === 0){
      this.setState(prevState => ({
        currentImg: 3
      }))
    } else {
      this.setState(prevState => ({
        currentImg: prevState.currentImg - 1
      }))
    }
  }

  rightClick = () => {
    if(this.state.currentImg === 3){
      this.setState(prevState => ({
        currentImg: 0
      }))
    } else {
      this.setState(prevState => ({
        currentImg: prevState.currentImg + 1
      }))
    }
  }

  selectedImage = () => {
    return <img src={this.props.images[this.state.currentImg]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}