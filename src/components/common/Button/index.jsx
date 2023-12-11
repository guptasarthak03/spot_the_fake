import React from 'react';
import './Button.css';

function Button({ onClickHandler, customClass, btnLabel }) {
  return (
    <button
      onClick={onClickHandler}
      class={`btn ${customClass}`}
    >
      {btnLabel}
    </button>
  );
}

export default Button;
