import React, { useState } from 'react';
import styles from './tab.module.scss';

const Tab = ({ menus }) => {
  const [move, setMove] = useState('translateX(0)');
  const DISTANCE = 150;

  const handleSelect = (e) => {
      setMove(`translateX(${e.currentTarget.id * DISTANCE}px)`);
  };
  
  return (
    <div className={styles.tabs}>
    {menus.map((menu, idx) =>
      <div key={`menu-data${idx}`}>
        <input
          id={idx}
          type="radio"
          name="tab"
          className={styles.radioTab}
          onChange={handleSelect}
        />
        <label htmlFor={idx} className={styles.tab}>{menu}</label>
      </div>
    )}
    <div
      className={styles.slider}
      style={{transform: move}}
    />
    </div>
  );
}

export default Tab;