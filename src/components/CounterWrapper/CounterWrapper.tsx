import React, { ChangeEvent } from 'react'
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import CounterSettings from '../CounterSettings/CounterSettings';
import './CounterWrapper.scss'

type CounterWrapperPropsTypes = {
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
    counter: number
    maxValue: number
    minValue: number
    valueCounterMax: number
    valueCounterMin: number
    changeMinMaxCounter: (max: number, min: number) => void
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMin: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    errorInputMax: boolean
    errorInputMin: boolean
    errorInputs: boolean
    btnDisabled: boolean
    infoCounter: string
}

export const CounterWrapper = ({ incCounter, decCounter, resetCounter, counter, maxValue, minValue, valueCounterMax, valueCounterMin, changeMinMaxCounter, onChangeHandlerMax, onChangeHandlerMin, error, errorInputMax, errorInputMin, errorInputs, btnDisabled, infoCounter }: CounterWrapperPropsTypes) => {
    return (
        <div className="counters">
            <CounterSettings
                valueCounterMax={valueCounterMax}
                valueCounterMin={valueCounterMin}
                changeMinMaxCounter={changeMinMaxCounter}
                onChangeHandlerMax={onChangeHandlerMax}
                onChangeHandlerMin={onChangeHandlerMin}
                errorInputMax={errorInputMax}
                errorInputMin={errorInputMin}
                errorInputs={errorInputs}
                btnDisabled={btnDisabled}
            />
            <div className="counter-wrapper">
                <div className="counter-in">
                    <Counter counter={counter} maxValue={maxValue} error={error} infoCounter={infoCounter} />
                    <div className="btns">
                        <Button
                            callBack={incCounter}
                            name={"+ Inc"}
                            disabled={counter === maxValue || btnDisabled || infoCounter !== ''}
                            className={'styled-btn-1'} />
                        <Button callBack={decCounter}
                            name={"- Dec"}
                            disabled={counter === minValue || btnDisabled || infoCounter !== ''}
                            className={'styled-btn-2'} />
                        <Button
                            callBack={resetCounter}
                            name={"Reset"}
                            disabled={counter === minValue || btnDisabled || infoCounter !== ''}
                            className={'styled-btn-3'} />
                    </div>
                </div>
            </div>
        </div>
    );
}