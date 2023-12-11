import React from 'react';
import './HeaderComponent.css';

function HeaderComponent({ score }) {
  return (
    <div className='current'>
      <p className='current__label'>Spot the Fake</p>
      <hr />
      <p className='current__score'>Score: {score}</p>
    </div>
  );
}

export default HeaderComponent;
