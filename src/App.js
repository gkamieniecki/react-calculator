import React, { Component } from "react";
import './App.css';
import { Button } from './components/Button';
import { ButtonGrey } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }
  
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) })
  }
  
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>AC</ClearButton>
            <ButtonGrey val="*(-1)" handleClick={this.addToInput}>+/-</ButtonGrey>
            <ButtonGrey val="%"handleClick={this.addToInput}>%</ButtonGrey>
            <Button val="/" handleClick={this.addToInput}>÷</Button>
          </div>
          <div className="row">
            <Button val="7" handleClick={this.addToInput}>7</Button>
            <Button val="8" handleClick={this.addToInput}>8</Button>
            <Button val="9" handleClick={this.addToInput}>9</Button>
            <Button val="*" handleClick={this.addToInput}>X</Button>
          </div>
          <div className="row">
            <Button val="4" handleClick={this.addToInput}>4</Button>
            <Button val="5" handleClick={this.addToInput}>5</Button>
            <Button val="6" handleClick={this.addToInput}>6</Button>
            <Button val="-" handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button val="1" handleClick={this.addToInput}>1</Button>
            <Button val="2" handleClick={this.addToInput}>2</Button>
            <Button val="3" handleClick={this.addToInput}>3</Button>
            <Button val="+" handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button val="0" handleClick={this.addToInput} doublewidth>0</Button>
            <Button val="." handleClick={this.addToInput}>.</Button>
            <Button val="=" handleClick={this.handleEqual}>=</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
