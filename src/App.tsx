import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/CounterWrapper/CounterWrapper';

function App() {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)

  const [counter, setCounter] = useState<number>(minValue);

  const [error, setError] = useState<boolean>(false);
  const [infoCounter, setInfoCounter] = useState<boolean>(false); //текст на табло

  useEffect(() => {
    let valueMin = localStorage.getItem('minValue'); // получаем значение с localStorage
    let valueMax = localStorage.getItem('maxValue');
    if (valueMax) {
      let newValueMax = JSON.parse(valueMax)
      setMaxValue(newValueMax)
    }
    if (valueMin) {
      let newValueMin = JSON.parse(valueMin)
      setMinValue(newValueMin)
      setCounter(newValueMin)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue)); // отправляем значение в localStorage
    localStorage.setItem('minValue', JSON.stringify(minValue));
    errorHandlerMaxValue(maxValue);
    errorHandlerMinValue(minValue);
  }, [maxValue, minValue]);

  const incCounter = () => {
    counter < maxValue && setCounter(counter + 1)
  }

  const decCounter = () => {
    counter > minValue && setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(minValue);
  }

  const changeMinMaxCounter = (max: number, min: number) => {
    setMaxValue(max)
    setMinValue(min)
    setCounter(min)
    setError(false)
    setInfoCounter(false)
  }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = +e.currentTarget.value;
    setMaxValue(numb);
    errorHandlerMaxValue(numb);
  }

  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = +e.currentTarget.value;
    setMinValue(+e.currentTarget.value);
    errorHandlerMinValue(numb);
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
      <CounterWrapper
        incCounter={incCounter}
        decCounter={decCounter}
        resetCounter={resetCounter}
        counter={counter}
        maxValue={maxValue}
        minValue={minValue}
        changeMinMaxCounter={changeMinMaxCounter}
        onChangeMaxValue={onChangeMaxValue}
        onChangeMinValue={onChangeMinValue}
        error={error}
        infoCounter={infoCounter}
      />
    </div >
  )
}

export default App;
