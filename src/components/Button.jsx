import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "*(-1)" || val === "%";
}

export const Button = props => {
    return (
        <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"} ${props.doublewidth && "doublewidth" }`}
            onClick={() => props.handleClick(props.val)}> 
                {props.children}
        </div>
    )
}

export const ButtonGrey = props => {
    return (
        <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"} greycolor`}
            onClick={() => props.handleClick(props.val)}> 
                {props.children}
        </div>
    )
}
