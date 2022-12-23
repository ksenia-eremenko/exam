import React from 'react'
import './Counter.scss'

type CounterPropsType = {
    counter: number
    maxValue: number
    error: boolean
    infoCounter: boolean
}

const Counter = ({ counter, maxValue, error, infoCounter }: CounterPropsType) => {
    const textInfo = "Click 'SET'";
    const textError = "Incorrect value!";
    
    return (
        <div className="counter">
            <div className={`${(counter === maxValue ? 'red ' : '')}number`}>
                {(error)
                    ? <div className="error-text">{textError}</div>
                    : (infoCounter) ? <div className="info-text">{textInfo}</div> : counter
                }
            </div>
        </div>
    )
}

export default Counter