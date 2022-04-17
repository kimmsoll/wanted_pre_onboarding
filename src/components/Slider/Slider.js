import React, { useState } from 'react';
import styles from './slider.module.scss';

const Slider = () => {
    const [isSelected, setIsSelected] = useState(1);
    const handleChange = (e) => {
        const value = e.target.value;
        setIsSelected(() => value);
    }
    const handleClick = (e) => {
        const target = e.target.innerText.slice(0, -1);
        setIsSelected(() => target);
    }
    return (
        <div className={styles.slider}>
            <div className={styles.valueContainer}>
                <span>{isSelected}</span>
                <span className={styles.percentage}>%</span>
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
                    onChange={(e) => handleChange(e)} />
            </div>
            <ul className={styles.valueStep}>
                <li
                onClick={(e) => handleClick(e)}
                className={styles.step}>1%</li>
                <li
                onClick={(e) => handleClick(e)}
                className={styles.step}>25%</li>
                <li
                onClick={(e) => handleClick(e)}
                className={styles.step}>50%</li>
                <li
                onClick={(e) => handleClick(e)}
                className={styles.step}>75%</li>
                <li
                onClick={(e) => handleClick(e)}
                className={styles.step}>100%</li>
            </ul>
        </div>
    );
}

export default Slider;