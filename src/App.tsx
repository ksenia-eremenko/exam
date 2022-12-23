import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import { decCounterAC, incCounterAC, maxValueCounterAC, minValueCounterAC, resetCounterAC, stateType } from './state/counter-reducer/counter-reducer';
import { AppRootStateType } from './state/store';

function App() {
  const dispatch = useDispatch()
  let counterValues = useSelector<AppRootStateType, stateType>(state => state.counter);

  let maxValue = counterValues.maxValue;
  let minValue = counterValues.minValue;
  let startValue = (counterValues.value < minValue ? minValue : counterValues.value);

  const [error, setError] = useState<boolean>(false);
  const [infoCounter, setInfoCounter] = useState<boolean>(true); //текст на табло

  useEffect(() => {
    if (maxValue < 0 || minValue < 0 || maxValue < minValue) {
      setError(true)
    }
  }, [maxValue, minValue])

  const incCounter = useCallback(() => {
    dispatch(incCounterAC(startValue))
  }, [dispatch, startValue])

  const decCounter = useCallback(() => {
    dispatch(decCounterAC(startValue))
  }, [dispatch, startValue])

  const resetCounter = useCallback(() => {
    dispatch(resetCounterAC(startValue))
  }, [dispatch, startValue])

  const changeMinMaxCounter = useCallback(() => {
    setError(false)
    setInfoCounter(false)
  }, [setError, setInfoCounter])

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = +e.currentTarget.value;
    dispatch(maxValueCounterAC(numb))
    errorHandlerMaxValue(numb)
  }

  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = +e.currentTarget.value;
    dispatch(minValueCounterAC(numb))
    errorHandlerMinValue(numb)
  }

  const errorHandlerMaxValue = (numb: number) => {
    if (numb < 0 || numb <= minValue) {
      setError(true)
      setInfoCounter(false)
    } else {
      setError(false)
      setInfoCounter(true)
    }
  }

  const errorHandlerMinValue = (numb: number) => {
    if (numb < 0 || numb >= maxValue) {
      setError(true)
      setInfoCounter(false)
    } else {
      setError(false);
      setInfoCounter(true)
    }
  }
  return (
    <div className="App">
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
                callBack={() => changeMinMaxCounter()}
                name={"Set"}
                disabled={error}
                className={'styled-btn-2'}
              />
            </div>
          </div>
        </div>
        <div className="counter-wrapper">
          <div className="counter-in">
            <Counter counter={startValue} maxValue={maxValue} error={error} infoCounter={infoCounter} />
            <div className="btns">
              <Button
                callBack={incCounter}
                name={"+ Inc"}
                disabled={startValue === maxValue || error || infoCounter}
                className={'styled-btn-1'} />
              <Button callBack={decCounter}
                name={"- Dec"}
                disabled={startValue === minValue || error || infoCounter}
                className={'styled-btn-2'} />
              <Button
                callBack={resetCounter}
                name={"Reset"}
                disabled={startValue === minValue || error || infoCounter}
                className={'styled-btn-3'} />
            </div>
          </div>
        </div>
      </div>
      {/* <CounterWrapper
        incCounter={incCounter}
        decCounter={decCounter}
        resetCounter={resetCounter}
        counter={counterValue}
        maxValue={maxValue}
        minValue={minValue}
        changeMinMaxCounter={changeMinMaxCounter}
        onChangeMaxValue={onChangeMaxValue}
        onChangeMinValue={onChangeMinValue}
        error={error}
        infoCounter={infoCounter}
      /> */}
    </div >
  )
}

export default App;
