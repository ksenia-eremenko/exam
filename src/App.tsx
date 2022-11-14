import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/CounterWrapper/CounterWrapper';
import './components/CounterSettings/CounterSettings.scss'

function App() {
  const [maxValue, setMaxValue] = useState<number>(5)
  const [minValue, setMinValue] = useState<number>(0)
  const [counter, setCounter] = useState<number>(minValue);

  const [valueCounterMax, setValueCounterMax] = useState<number>(maxValue)
  const [valueCounterMin, setValueCounterMin] = useState<number>(minValue)

  const [error, setError] = useState<string>(''); //ошибка отображается на табло
  const [infoCounter, setInfoCounter] = useState<string>('');

  const [errorInputMax, setErrorInputMax] = useState<boolean>(false); //Ошибка для инпута с максимальным значением
  const [errorInputMin, setErrorInputMin] = useState<boolean>(false); //Ошибка для инпута с минимальным значением
  const [errorInputs, setErrorInputs] = useState<boolean>(false); //Ошибка для двух инпутов
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false); //дисейблит кнопки

  const textError = "Incorrect value!";
  const textInfo = "Click 'SET'";
  
  useEffect(() => {
    let valueMax = localStorage.getItem('maxValue');
    let valueMin = localStorage.getItem('minValue');
    if (valueMax) {
      let newValueMax = JSON.parse(valueMax)
      setValueCounterMax(newValueMax)
      setMaxValue(newValueMax)
    }
    if (valueMin) {
      let newValueMin = JSON.parse(valueMin)
      setValueCounterMin(newValueMin)
      setMinValue(newValueMin)
      setCounter(newValueMin)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(valueCounterMax));
    localStorage.setItem('minValue', JSON.stringify(valueCounterMin));
  }, [valueCounterMax, valueCounterMin]);

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
    setError('')
    setInfoCounter('')
  }

  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = Number(e.currentTarget.value)
    setValueCounterMax(numb)

    if (numb < 0) {
      setError(textError)
      setErrorInputMax(true)
      setBtnDisabled(true)
      setInfoCounter('')
    } else if (numb === valueCounterMin || numb < valueCounterMin) {
      setError(textError)
      setErrorInputs(true)
      setBtnDisabled(true)
      setInfoCounter("")
    } else if (valueCounterMin < 0) {
      setError(textError)
      setErrorInputMax(false)
      setErrorInputs(false)
    } else if (numb >= 0) {
      setInfoCounter(textInfo)
      setErrorInputMax(false)
      setErrorInputMin(false)
      setErrorInputs(false)
      setBtnDisabled(false)
      setError("")
    }
  }

  const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = Number(e.currentTarget.value)
    setValueCounterMin(numb)

    if (numb < 0) {
      setError(textError)
      setErrorInputMin(true)
      setBtnDisabled(true)
      setInfoCounter("")
    } else if (numb === valueCounterMax || numb > valueCounterMax) {
      setError(textError)
      setErrorInputs(true)
      setBtnDisabled(true)
      setInfoCounter("")
    } else if (valueCounterMax < 0) {
      setError(textError)
      setErrorInputMin(false)
      setErrorInputs(false)
    } else if (numb >= 0) {
      setInfoCounter(textInfo)
      setErrorInputMin(false)
      setErrorInputMax(false)
      setErrorInputs(false)
      setBtnDisabled(false)
      setError("")
    }


    // switch (true) {
    //   case (numb < 0):
    //     setCounterStatus({ error: "Incorrect value!", errorInput: "error" });
    //     break;
    //   case (numb === valueCounterMax || numb > valueCounterMax):
    //     setCounterStatus({ error: "Incorrect value!", errorInput: "error" });
    //     break;
    // }
  }

  // const setCounterStatus = ({ error = '', errorInput = '', btnStatus = true, infoCounter = '' }) => {
  //   setError(error)
  //   setErrorInputMin(errorInput)
  //   setBtnDisabled(btnStatus)
  //   setInfoCounter(infoCounter)
  // }

  return (
    <div className="App">
      <CounterWrapper
        incCounter={incCounter}
        decCounter={decCounter}
        resetCounter={resetCounter}
        counter={counter}
        maxValue={maxValue}
        minValue={minValue}
        valueCounterMax={valueCounterMax}
        valueCounterMin={valueCounterMin}
        changeMinMaxCounter={changeMinMaxCounter}
        onChangeHandlerMax={onChangeHandlerMax}
        onChangeHandlerMin={onChangeHandlerMin}
        error={error}
        errorInputMax={errorInputMax}
        errorInputMin={errorInputMin}
        btnDisabled={btnDisabled}
        errorInputs={errorInputs}
        infoCounter={infoCounter}
      />
    </div >
  )
}

export default App;
