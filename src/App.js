import React from 'react';
import './App.css';
import Button from './components/button';

export default class App extends React.Component {
  render() {
    let buttons = [
      { name: "+", action: "operator" },
      { name: "-", action: "operator" },
      { name: "*", action: "operator" },
      { name: "/", action: "operator" },
      { name: "7", action: "number" },
      { name: "8", action: "number" },
      { name: "9", action: "number" },
      { name: "4", action: "number" },
      { name: "5", action: "number" },
      { name: "6", action: "number" },
      { name: "1", action: "number" },
      { name: "2", action: "number" },
      { name: "3", action: "number" },
      { name: ".", action: "decimate" },
      { name: "0", action: "number" },
      { name: "AC", action: "allClear" },
      { name: "=", action: "equal" }
    ]
    
    let thisValue = "";

    let newValue = "";

    let operatorsValue = "";

    let calculationText = []; 

    let screenRef = React.createRef()

    let allClearButton = () => {
      calculationText = []
    }

    let saveValue = (text) => {
      newValue = text;
      calculationText.push(newValue);
    }

    let addOperator = (text) => {
      operatorsValue = text;
      calculationText.push(operatorsValue);
    }

    let calculation = () => {
      let text = calculationText[0] + calculationText[1] + calculationText[2];
      let a = "+";
      let b = "-";
      let c = "*";
      let d = "/";
      let lastChar = calculationText.pop();
      if (lastChar === a || lastChar === b || lastChar === c || lastChar === d) {
        return calculationText.pop()
      }
      let text_2 = eval(text)
      screenRef.current.value = text_2;
    }

    /*let calculation = (text) => {
      thisValue = newValue;
      text = thisValue + operatorsValue + newValue;
      alert(text)
    }*/

    let updateInput = (text) => {
      thisValue = text;
    }

    let inputChanged = () => {
      let text = screenRef.current.value;
      updateInput(text);
    }

    let numberButtons = buttons.map((n) => {
      return (<Button className={n.action} buttonsName={n.name} allClearButton={allClearButton} thisValue={screenRef} saveValue={saveValue} addOperator={addOperator} calculation={calculation} />)
    })

    return (
      <div className="calculator">
        <div>
          <input onChange={inputChanged} className="calculatorScreen" ref={screenRef} value={thisValue} />
        </div>
        <div>
          <div className="allNumbers">{numberButtons}</div>
        </div>
      </div>
    );
  }
}
