import React from 'react';
import Button from '../../common/Button';
import './ButtonContainer.css';

function ButtonContainer({ onResetClick, onNextClick, finished }) {
  return (
    <div className='btn__container'>
      <Button
        onClickHandler={onResetClick}
        customClass='btn--new'
        btnLabel={'🔄 New game'}
      />
      {!finished && (
        <Button
          onClickHandler={onNextClick}
          customClass='btn--next'
          btnLabel={'▶️ Next'}
        />
      )}
    </div>
  );
}

export default ButtonContainer;
