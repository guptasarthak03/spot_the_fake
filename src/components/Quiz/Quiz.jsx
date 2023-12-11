import React, { useState } from 'react';
import './styles.css';
import { imageData } from '../../assets/imageData';
import ButtonContainer from '../container/ButtonContainer';
import OptionContainer from '../container/OptionContainer';
import HeaderComponent from '../container/HeaderComponent';

function Quiz() {
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(imageData[index]);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setfinished] = useState(false);

  const onNextClick = () => {
    if (answered && index < imageData.length - 1) {
      let newIndex = index + 1;
      setIndex(newIndex);
      setCurrent(imageData[newIndex]);
      setAnswered(false);

      if (newIndex === imageData.length - 1) {
        setfinished(true);
      }
    }
  };

  const onResetClick = () => {
    setIndex(0);
    setCurrent(imageData[0]);
    setAnswered(false);
    setScore(0);
  };

  const handleClick = e => {
    if (!answered) {
      const parentElement = e.target.closest('.player');
      const imgElement = parentElement?.querySelector('img');
      const imgPath = imgElement?.getAttribute('src');

      if (current.correct === imgPath) {
        console.log('correct');
        parentElement.classList.add('correct');
      } else {
        console.log('false');
        parentElement.classList.add('wrong');
      }
      setAnswered(true);
      setScore(prevScore => prevScore + 10);
    }
  };

  return (
    <div className='game__container'>
      <HeaderComponent score={score} />

      <OptionContainer
        current={current}
        answered={answered}
        handleClick={handleClick}
      />

      <ButtonContainer
        onResetClick={onResetClick}
        onNextClick={onNextClick}
        finished={finished}
      />
    </div>
  );
}

export default Quiz;
