import React, { useState } from 'react';

// function countInitial() {
//   console.log('run function');
//   return 4;
// }

function AddMinus() {
  // const [count, setCount] = useState(4);
  // const [count, setCount] = useState(() => {
  //   console.log('run function');
  //   return 4;
  // });
  // const [count, setCount] = useState(() => countInitial());

  // const [state, setState] = useState({ count: 4, theme: 'blue' });
  // const count = state.count;
  // const theme = state.theme;

  const[count, setCount] =  useState(4);
  const[theme, setTheme] =  useState('blue');

  function decrementCount() {
    // setCount(count - 1);
    // setCount(count - 1);

    // setCount(prevCount => prevCount - 1);
    // setCount(prevCount => prevCount - 1);
    // setState(prevState => {
    //   return { ...prevState, count: prevState.count - 1}
    // })
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    // setCount(count + 1);
    // setCount(prevCount => prevCount + 1);
    // setState(prevState => {
    //   return { ...prevState, count: prevState.count + 1}
    // })
    setCount(prevCount => prevCount + 1);
    setTheme('red')
  }

  return (
    <>
      <button 
        className="minus-button"
        onClick={decrementCount}
      >
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button 
        className="add-button"
        onClick={incrementCount}
      >
        +
      </button>
    </>
  )
}

export default AddMinus;