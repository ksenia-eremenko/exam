import React, { ChangeEvent } from 'react'
import Button from '../Button/Button'
import './CounterSettings.scss'

type CounterSettingsType = {
    valueCounterMax: number
    valueCounterMin: number
    changeMinMaxCounter: (max: number, min: number) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    errorInputMax: boolean
    errorInputMin: boolean
    errorInputs: boolean
    btnDisabled: boolean
}

const CounterSettings = ({ valueCounterMax, valueCounterMin, changeMinMaxCounter, onChangeMaxValue, onChangeMinValue, errorInputMax, errorInputMin, errorInputs, btnDisabled }: CounterSettingsType) => {

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
                            onChange={onChangeMaxValue}
                            className={(errorInputMax || errorInputs) ? 'errorInput' : ''}
                        />
                    </div>
                    <div className="item">
                        <div className="text">start value:</div>
                        <input
                            type="number"
                            value={valueCounterMin}
                            onChange={onChangeMinValue}
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