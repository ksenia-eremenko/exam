import React from 'react'
import './Counter.scss'

type CounterPropsType = {
    counter: number
}

const Counter = (props: CounterPropsType) => {
    const { counter } = props

    const bgCounter = `counter ${
        counter === 1 ? 'color1'
        : counter === 2 ? 'color2'
            : counter === 3 ? 'color3'
                : counter === 4 ? 'color4'
                    : counter === 5 ? 'color5' : ''}`

    return (
        <div className={bgCounter}>
            <div className={`${(counter === 5 ? 'red ' : '')}number`}>{counter}</div>
        </div>
    )
}

export default Counter