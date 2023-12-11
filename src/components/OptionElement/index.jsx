import React from 'react';
import './optionElement.css';

function OptionElement({ imgPath, onClickHandle, current, answered, option }) {
  return (
    <section
      onClick={onClickHandle}
      className='option--container'
    >
      <div
        className={`player ${
          answered &&
          (current[option] === current.correct ? 'correct' : 'wrong')
        }`}
      >
        <h2 className='title'>
          {option === 'option1' ? 'Option 1' : 'Option 2'}
        </h2>
        <div className='img_container'>
          <img
            src={current[option]}
            alt='Option Choice'
          />
        </div>
      </div>
    </section>
  );
}

export default OptionElement;
