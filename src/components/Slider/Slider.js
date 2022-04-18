import React, { useState } from 'react';
import styles from './slider.module.scss';

const Slider = () => {
    const [isSelected, setIsSelected] = useState(1);
    const steps = [1, 25, 50, 75, 100];
    
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
                    onChange={(e) => handleChange(e)}
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
                key={idx}
                onClick={(e) => handleClick(e)}
                className={styles.step}>{step}%</li>
            )}
            </ul>
        </div>
    );
}

export default Slider;