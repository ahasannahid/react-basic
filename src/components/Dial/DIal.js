import React from 'react';

const DIal = (props) => {
    return (
        <div style={{border: '2px solid blue', margin: '5px'}}>
            <h3>This is Dial </h3>
            <p>Steps So Far:{props.steps} </p>
        </div>
    );
};

export default DIal;