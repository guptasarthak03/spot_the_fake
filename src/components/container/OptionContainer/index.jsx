import React from 'react';
import './optionContainer.css';
import OptionElement from '../../OptionElement';

function OptionContainer({ current, answered, handleClick }) {
  return (
    <div className='game__options'>
      <OptionElement
        onClickHandle={handleClick}
        label='option 1'
        imgPath={current.option1}
        current={current}
        answered={answered}
        option='option1'
      />
      <OptionElement
        onClickHandle={handleClick}
        label='option 2'
        imgPath={current.option2}
        current={current}
        answered={answered}
        option='option2'
      />
    </div>
  );
}

export default OptionContainer;
