import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

  // const [nombre, setNombre] = useState('Goku');
  const [counter, setCounter] = useState(value);

  // handleAdd
  // const handleAdd = (e) => {
  const handleAdd = () => {
    // console.log(e);
    // setCounter(counter+1);
    setCounter( (c) => c+1 );
  }

  const handleSubtract = () => {
    setCounter( (c) => c-1 );
  }

  const handleReset = () => {
    setCounter( value );
  }
  return (
    <>
      <h1>CounterApp</h1>
      {/*<h2> {value} </h2>*/}
      <h2> {counter} </h2>
        {/*<button onClick={ (e) => { handleAdd(e) } }>+1</button>*/}
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;