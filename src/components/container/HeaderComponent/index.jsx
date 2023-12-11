import React from 'react';
import './HeaderComponent.css';

function HeaderComponent({ score, index, length, timer }) {
  return (
    <div className='current'>
      <p className='current__label'>Spot the Fake</p>
      <hr />
      <div className='current__stats'>
        <p className='current__index'>
          {index + 1}/{length} Question
        </p>
        <p className='current__score'>Score: {score}</p>
        <p className='current__score'>⌛ {timer / 1000} seconds</p>
      </div>
    </div>
  );
}

export default HeaderComponent;
