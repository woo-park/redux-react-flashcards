import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './../actions';


function ButtonCounter() {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();


  return (
    <div className="App">
      Counter: {counter}
      <button onClick={() => dispatch(increment(1))}>
      +
      </button>
      <button onClick={() => dispatch(decrement(1))}>
      -
      </button>
    </div>
  );
}


export default ButtonCounter;
