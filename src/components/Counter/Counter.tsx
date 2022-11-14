import React from 'react'
import './Counter.scss'

type CounterPropsType = {
    counter: number
    maxValue: number
    error: string
    infoCounter: string
}

const Counter = ({ counter, maxValue, error, infoCounter }: CounterPropsType) => {
    
    return (
        <div className="counter">
            <div className={`${(counter === maxValue ? 'red ' : '')}number`}>
                {(infoCounter) ? <div className="info-text">{infoCounter}</div> : (error) ? <div className="error-text">{error}</div> : counter}
            </div>
        </div>
    )
}

export default Counter