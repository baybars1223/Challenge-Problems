import React, { Component } from 'react';

export default class CalculatorButton extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {
    	myValue: this.props.name
    }
  }
  
  render () {
  	return(
    	<div
        className="calc-button"
        onClick={()=>{this.props.clickFunction(this.state.myValue)}}
      >
    	  {this.props.name}
    	</div>
    )
  }
}