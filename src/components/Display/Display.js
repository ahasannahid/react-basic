import React from 'react';
import DIal from '../Dial/DIal';

const Display = (props) => {
    return (
        <div style={{border: '2px solid green',margin: '5px'}}>
            <h2>Name: {props.name}</h2>
            <p>So Far Steps Today: {props.steps}</p>
            <DIal steps={props.steps}></DIal>
        </div>
    );
};

export default Display;