import React, { useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/CounterWrapper/CounterWrapper';

function App() {
  let [counter, setCounter] = useState<number>(0);

    const onClickIncrement = () => {
        if (counter < 5) {
            setCounter(++counter)
        }
    }
    const onClickDecrement = () => {
        if (counter > 0) {
            setCounter(--counter)
        }
    }
    const onClickReset = () => {
        setCounter(0);
    }
  return (
    <div className='App'>
      <CounterWrapper 
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
      onClickReset={onClickReset}
      counter={counter}
      />
    </div>
  )
}

export default App;
