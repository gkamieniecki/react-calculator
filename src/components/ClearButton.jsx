import React from 'react';
import './ClearButton.css';


export const ClearButton = (props) => {
    return (
        <div className="clear-btn doublewidth" onClick={props.handleClear}>
            {props.children}
        </div>
    )
}