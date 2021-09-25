import React, { useState } from 'react';
import './ButtonTwo.scss';

function ButtonTwo() {
  const [buttonText, setButtonText] = useState("Click me, please");
  
  function handleClick() {
    return setButtonText("Thanks, been clicked");
  }

  return (
    <button 
      className="hooks-button" 
      onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ButtonTwo;