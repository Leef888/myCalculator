import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: ""
    }
    this.operations = ['del', '+', '-', '*', '/']
  }

  calculateResult() {
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }

  validate() {
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text) {
    if (text === "=") {
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate(operation) {
    switch (operation) {
      case 'del':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()

        if (this.operations.indexOf(lastChar) > 0) return

        if (this.state.text === "") return
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    let rows = []
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [".", 0, "="]]
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<div><button onClick={() => this.buttonPressed(nums[i][j])}>{nums[i][j]}</button></div>)
      }
      rows.push(<div>{row}</div>)
    }

    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(<div><button onClick={() => this.operate(this.operations[i])}>{this.operations[i]}</button></div>)
    }

    return (
      <div className="container">
        <div className="calculation">
          <h1 className="calculationText">{this.state.resultText}</h1>
        </div>
        <div className="result">
          <h2 className="resultText" type="text">{this.state.calculationText}</h2>
        </div>
        <div className="numbers">
          {rows}
        </div>
        <div className="operations">
          {ops}
        </div>
      </div>
    );
  }
}

export default App;
