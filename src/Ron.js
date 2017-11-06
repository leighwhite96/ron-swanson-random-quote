import React, { Component } from 'react'

export default class Ron extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick(){
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(results => results.json())
    .then(data => {
      let quote = data[0];
      this.setState({
        quote
      })
    })
  }
  render(){
    return (
      <div>
      <div id="ron">
        <img src="https://ih0.redbubble.net/image.69141097.8710/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="ron"/>
        <button onClick={this.handleBtnClick}>Click for quote</button>
      </div>
      <div id="quote">
        <p>{this.state.quote}</p>
      </div>
      </div>
    )
  }



}
