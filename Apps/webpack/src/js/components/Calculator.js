import React, { Component } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operators: ['+', '-', 'x', '/', '=', 'C' ],
      currentTotal: 0,
      immediateTotal: 0,
      currentValue: 0,
      lastValue: 0,
			currentOperator: '',
      equationHistory: '',
      lastWasNumber: false,
      inNumber: false,
      isFirst: true,
      displayValue: ''
    }
    this.handleOperator = this.handleOperator.bind(this);
   	this.handleValue = this.handleValue.bind(this);
    this.trackEquationHistory =this.trackEquationHistory.bind(this);
    this.trackDisplay = this.trackDisplay.bind(this);
    this.calculate = this.calculate.bind(this);
  }
 	
  trackEquationHistory(input){
  	console.log('in equation history')
		this.setState({
    	equationHistory: this.state.equationHistory += input
    }, this.trackDisplay)
  }
  
  trackDisplay(){
   	console.log('in track display')
  	if (this.state.isFirst===true) {
    	this.setState({
      	displayValue: `${this.state.equationHistory}`
      })
    } else {
    	this.setState({
      	displayValue: `${this.state.equationHistory}=${this.state.immediateTotal}`
      })
    }
  }
  
  calculate(input) {
    console.log('in calculate')
  	const op = this.state.currentOperator;
    if ( op ==='+') {
    	this.setState({
      	immediateTotal: this.state.currentTotal + Number(this.state.currentValue)
      }, ()=>{this.trackEquationHistory(input)})
    } else if ( op ==='-') {
    	this.setState({
      	immediateTotal: this.state.currentTotal - Number(this.state.currentValue)
      }, ()=>{this.trackEquationHistory(input)})
    } else if ( op ==='x') {
    	this.setState({
      	immediateTotal: this.state.currentTotal * Number(this.state.currentValue)
      }, ()=>{this.trackEquationHistory(input)})
    } else if ( op ==='/') {
    	this.setState({
      	immediateTotal: this.state.currentTotal / Number(this.state.currentValue)
      }, ()=>{this.trackEquationHistory(input)})
    } else if ( op ==='=') {
    	this.setState({
      	currentTotal: this.state.immediateTotal,
      	equationHistory: this.state.immediateTotal
      }, ()=>{this.trackEquationHistory(input)})
    } else if ( op ==='C') {
    	this.setState({
      	currentTotal: 0,
        currentValue: 0,
        currentOperator: '',
        equationHistory: '',
        lastWasNumber: false,
				immediateTotal: 0,
      	isFirst: true
      }, ()=>{this.trackEquationHistory(input)})
    } else {
    	this.setState({
      	currentTotal: this.state.currentTotal + Number(this.state.currentValue)
      }, ()=>{this.trackEquationHistory(input)})
    }
  }
  
  handleValue(value) {
    console.log('in handleValue')
  	if (this.state.isFirst && !this.state.lastWasNumber) {
			this.setState({
      	currentValue: `${value}`,
				lastWasNumber: true
      }, ()=>{
      	this.calculate(value); 
        /* this.trackEquationHistory(value) */
        console.log(`${this.state.currentValue}`)
      })
    } else if (this.state.lastWasNumber) {
    	this.setState({
      	currentValue: `${this.state.currentValue}${value}`
      }, ()=>{
      	
      	this.calculate(value)
       
        console.log(`${this.state.currentValue}`)
      })
    } else if (!this.state.lastWasNumber) {
    	this.setState({
				lastWasNumber: true
      }, ()=>{
      	this.calculate(value);
        this.setState({
        	currentValue: value
        })
        console.log(`${this.state.currentValue}`)
      })
    }
  }
  
  handleOperator(operator) {
    console.log('in handleOperator')
  	console.log('selected operator: ', operator)
    this.setState({
    	currentOperator: operator,
      lastNumber: this.state.currentValue,
      /* equationHistory: this.state.equationHistory += operator, */
      lastWasNumber: false,
      isFirst: false
    }, ()=>{
    	console.log('updated currentOperator: ', this.state.currentOperator);
      if(operator!=='C' && operator!=='=') {
      	this.trackEquationHistory(operator)
      }
      })
  }
  
/*   evaluator() {
    if(this.state.equationHistory.length===0) {
      
    }
  } */
  
  render() {
    return (
    	<div>
        <Display outputValue={this.state.displayValue}/>
        <div className='numbers-container'>
          {this.state.numbers.map((element, i) => {
          	return (
            	<CalculatorButton
                name={element}
                key={i}
                clickFunction={this.handleValue}
              />
            )
          })}
        </div>
        <div className='button-container'>
          {this.state.operators.map((e, i) => {
          	return (
            	<CalculatorButton
                name={e}
                key={i}
                clickFunction={this.handleOperator}
              />
            )
          })}
        </div>
      </div>
    )
  }
}


// ReactDOM.render(<Calculator />, document.querySelector("#app"))