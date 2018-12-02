import React, { Component } from 'react';

export default class Display extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {
    	
    }
  }
  
  render() {
  	return (
    	<div className="display-container">
    	  <code>
    	    {this.props.outputValue}
    	  </code>
    	</div>
    )
  }
}