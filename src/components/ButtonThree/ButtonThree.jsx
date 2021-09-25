import React, { useState, useEffect } from 'react';
import './ButtonThree.scss';

function ButtonThree() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button 
        className="counted-button" 
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ButtonThree;