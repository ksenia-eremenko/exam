import React, { ChangeEvent } from 'react'
import Button from '../Button/Button'
import './CounterSettings.scss'

type CounterSettingsType = {
    valueCounterMax: number
    valueCounterMin: number
    changeMinMaxCounter: (max: number, min: number) => void
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMin: (e: ChangeEvent<HTMLInputElement>) => void
    errorInputMax: boolean
    errorInputMin: boolean
    errorInputs: boolean
    btnDisabled: boolean
}

const CounterSettings = (props: CounterSettingsType) => {
    const { valueCounterMax, valueCounterMin, changeMinMaxCounter, onChangeHandlerMax, onChangeHandlerMin, errorInputMax, errorInputMin, errorInputs, btnDisabled } = props;

    const onClickHandler = () => {
        changeMinMaxCounter(valueCounterMax, valueCounterMin)
    }
    return (
        <div className="counter-settings">
            <div className="counter-settings-in">
                <div className="top">
                    <div className="item">
                        <div className="text">max value:</div>
                        <input
                            type="number"
                            value={valueCounterMax}
                            onChange={onChangeHandlerMax}
                            className={(errorInputMax || errorInputs) ? 'errorInput' : ''}
                        />
                    </div>
                    <div className="item">
                        <div className="text">start value:</div>
                        <input
                            type="number"
                            value={valueCounterMin}
                            onChange={onChangeHandlerMin}
                            className={(errorInputMin || errorInputs) ? 'errorInput' : ''}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <Button
                        callBack={onClickHandler}
                        name={"Set"}
                        disabled={btnDisabled}
                        className={'styled-btn-2'}
                    />
                </div>
            </div>
        </div>
    )
}

export default CounterSettings