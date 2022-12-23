import React, { ChangeEvent } from 'react'
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import './CounterWrapper.scss'

type CounterWrapperPropsTypes = {
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
    counter: number
    maxValue: number
    minValue: number
    changeMinMaxCounter: (max: number, min: number) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
    infoCounter: boolean
}

export const CounterWrapper = ({ incCounter, decCounter, resetCounter, counter, maxValue, minValue, changeMinMaxCounter, onChangeMaxValue, onChangeMinValue, error, infoCounter }: CounterWrapperPropsTypes) => {
    const onClickHandler = () => {
        changeMinMaxCounter(maxValue, minValue)
    }
    return (
        <div className="counters">
            <div className="counter-settings">
                <div className="counter-settings-in">
                    <div className="top">
                        <div className="item">
                            <div className="text">max value:</div>
                            <input
                                type="number"
                                value={maxValue}
                                onChange={onChangeMaxValue}
                                className={(error) ? 'errorInput' : ''}
                            />
                        </div>
                        <div className="item">
                            <div className="text">start value:</div>
                            <input
                                type="number"
                                value={minValue}
                                onChange={onChangeMinValue}
                                className={(error) ? 'errorInput' : ''}
                            />
                        </div>
                    </div>
                    <div className="bottom">
                        <Button
                            callBack={onClickHandler}
                            name={"Set"}
                            disabled={error}
                            className={'styled-btn-2'}
                        />
                    </div>
                </div>
            </div>
            <div className="counter-wrapper">
                <div className="counter-in">
                    <Counter counter={counter} maxValue={maxValue} error={error} infoCounter={infoCounter} />
                    <div className="btns">
                        <Button
                            callBack={incCounter}
                            name={"+ Inc"}
                            disabled={counter === maxValue || error || infoCounter}
                            className={'styled-btn-1'} />
                        <Button callBack={decCounter}
                            name={"- Dec"}
                            disabled={counter === minValue || error || infoCounter}
                            className={'styled-btn-2'} />
                        <Button
                            callBack={resetCounter}
                            name={"Reset"}
                            disabled={counter === minValue || error || infoCounter}
                            className={'styled-btn-3'} />
                    </div>
                </div>
            </div>
        </div>
    );
}