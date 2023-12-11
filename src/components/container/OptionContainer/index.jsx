import React from 'react';
import './optionContainer.css';
import OptionElement from '../../OptionElement';

function OptionContainer({ current, answered, handleClick }) {

  const probability = Math.random() > 0.5;

  return (
    <div className='game__options'>
      <OptionElement
        onClickHandle={handleClick}
        current={current}
        answered={answered}
        option={probability ? 'option1' : 'option2'}
      />
      <OptionElement
        onClickHandle={handleClick}
        current={current}
        answered={answered}
        option={probability ? 'option2' : 'option1'}
      />
    </div>
  );
}

export default OptionContainer;
