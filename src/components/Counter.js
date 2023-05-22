import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { incrementCounter } from '../Services/Action/Counteraction';
import { decrementCounter } from '../Services/Action/Counteraction';
import { resetCounter } from '../Services/Action/Counteraction';

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const handleIncrementCounter = () => {
        dispatch(incrementCounter())
    }

    const handleDecrementCounter = () => {
        dispatch(decrementCounter())
    }

    const handleResetCounter = () => {
        dispatch(resetCounter())
    }


  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count {count}</h3>
      <button onClick={handleIncrementCounter}>Increment</button><br/>
      <button onClick={handleDecrementCounter}>Decrement</button><br/>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  )
}

export default Counter
