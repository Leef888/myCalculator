import React from 'react';
import './button.css';

const Button = (props) => {
    let buttonValue = React.createRef()

    let numberClicked = () => {
        let x = buttonValue.current.value;

        let y = props.thisValue.current.value;

        if (buttonValue.current.className === "allClear") {
            props.allClearButton();
            props.thisValue.current.value = ""
        } else if (buttonValue.current.className === "decimate") {
            let a = y.indexOf(x);
            if (a > -1) {
                let text = props.thisValue.current.value + "";
                props.thisValue.current.value = text
            } else {
                let text = props.thisValue.current.value + buttonValue.current.value;
                props.thisValue.current.value = text
            }
        } else if (buttonValue.current.className === "operator") {
            props.saveValue(y);
            props.addOperator(x);
            props.thisValue.current.value = "" + x;
        } else if (buttonValue.current.className === "equal") {
            props.saveValue(y);
            props.calculation()
        } else {
            let a = y.indexOf("+");
            let b = y.indexOf("-");
            let c = y.indexOf("*");
            let d = y.indexOf("/");
            if (a > -1 || b > -1 || c > -1 || d > -1) {
                props.thisValue.current.value = "" + buttonValue.current.value;
            } else {
                let text = props.thisValue.current.value + buttonValue.current.value;
                props.thisValue.current.value = text
            }
        }
    }

    return (
        <div className={props.className}>
            <button className={props.className} ref={buttonValue} onClick={numberClicked} value={props.buttonsName}>{props.buttonsName}</button>
        </div>
    );
}

export default Button;
