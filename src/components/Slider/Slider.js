import React, { useState } from 'react';
import styles from './slider.module.scss';

const Slider = () => {
  const [isSelected, setIsSelected] = useState(1);
  const steps = [1, 25, 50, 75, 100];
  const stepPoint = '%';

  const handleChange = (e) => {
    const value = e.target.value;
    setIsSelected(value);
  }
  
  const handleClick = (e) => {
    const target = e.target.value;
    setIsSelected(steps[target]);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.valueContainer}>
        <span>{isSelected}</span>
        <span className={styles.percentage}>{stepPoint}</span>
      </div>
      <div className={styles.valueSlider}>
        <input
          type="range"
          id="slider"
          className={styles.valueRange}
          list="marks"
          value={isSelected}
          min="1"
          max="100"
          onChange={handleChange}
          style={{
            background: `linear-gradient(
              to right,
              #37adbf 0%,
              #37adbf ${isSelected}%,
              lightgray ${isSelected}%,
              lightgray 100%)`
          }}
        />
        <div className={styles.dots}>
        {steps.map((v) => 
          isSelected >= v ?
          <div key={v} className={`${styles.dot} ${styles.colored}`} />
          : <div key={v} className={styles.dot} />
        )}
        </div>
      </div>
      <ul className={styles.valueStep}>
      {steps.map((step, idx) => 
        <li
        key={`step-data${idx}`}
        value={idx}
        onClick={handleClick}
        className={styles.step}>{step}{stepPoint}</li>
      )}
      </ul>
    </div>
  );
}

export default Slider;