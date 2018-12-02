import React, { Component } from 'react';
export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	
    }
  }
  
  render() {
    return (
    	<div class="calculator">
        <div class="history">History</div>
        <div class="value">Current Value</div>
        <div class="operators">
          <button class="calc-button">+</button>
          <button class="calc-button">-</button>
          <button class="calc-button">x</button>
          <button class="calc-button">/</button>
          <button class="calc-button">(</button>
          <button class="calc-button">)</button>
          <button class="calc-button">=</button>
          <button class="calc-button">C</button>
        </div>
        <div class="numbers">
          <button class="calc-button">1</button>
          <button class="calc-button">2</button>
          <button class="calc-button">3</button>
          <button class="calc-button">4</button>
          <button class="calc-button">5</button>
          <button class="calc-button">6</button>
          <button class="calc-button">7</button>
          <button class="calc-button">8</button>
          <button class="calc-button">9</button>
          <button class="calc-button">(-)</button>
          <button class="calc-button">.</button>
          <button class="calc-button">0</button>
        </div>
      </div>
    )
  }
}