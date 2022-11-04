import React from 'react'
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import './CounterWrapper.scss'

type CounterWrapperPropsTypes = {
    onClickIncrement: () => void
    onClickDecrement: () => void
    onClickReset: () => void
    counter: number
}

export const CounterWrapper = (props: CounterWrapperPropsTypes) => {
    const { onClickIncrement, onClickDecrement, onClickReset, counter } = props;

    return (
        <div className="counter-wrapper">
            <div className="counter-in">
                <Counter counter={counter} />
                <div className="btns">
                    <Button
                        callBack={onClickIncrement}
                        name={"+ Inc"}
                        disabled={counter === 5}
                        className={'styled-btn-1'} />
                    <Button callBack={onClickDecrement}
                        name={"- Dec"}
                        disabled={counter === 0}
                        className={'styled-btn-2'} />
                    <Button
                        callBack={onClickReset}
                        name={"Reset"}
                        disabled={counter !== 5}
                        className={'styled-btn-3'} />
                </div>
            </div>
        </div>
    );
}