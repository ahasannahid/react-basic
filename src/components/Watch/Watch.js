import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = (props) => {
    const [step, setStep] = useState(0);
    const increaseStep = () => setStep(step+1);

    useEffect( () => {
        console.log(step);
    }, [step])
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h1>This is my smart watch</h1>
            <h3>My Current Step: {step}</h3>
            <button onClick={increaseStep}>StepOver</button>
            <Display name='Apple' steps={step}></Display>
        </div>
    );
};

export default Watch;