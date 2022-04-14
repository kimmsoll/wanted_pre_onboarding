import React, { useState } from 'react';
import styles from './tab.module.scss';

const Tab = () => {
    const [move, setMove] = useState('translateX(0)');
    const handleSelect = ((e) => {
        if (e.target.id === 'tab1') {
            setMove((move) => 'translateX(0)');
        }
        if (e.target.id === 'tab2') {
            setMove((move) => 'translateX(150px)');
        }
        if (e.target.id === 'tab3') {
            setMove((move) => 'translateX(300px)');
        }
    });
    return (
        <div className={styles.tabs}>
            <input
                type="radio"
                id="tab1"
                name="tab"
                className={styles.radioTab}
                onChange={(e) => handleSelect(e)}
            />
            <label htmlFor="tab1" className={styles.tab}>감자</label>
            <input
                type="radio"
                id="tab2"
                name="tab"
                className={styles.radioTab}
                onChange={(e) => handleSelect(e)}
            />
            <label htmlFor="tab2" className={styles.tab}>고구마</label>
            <input
                type="radio"
                id="tab3"
                name="tab"
                className={styles.radioTab}
                onChange={(e) => handleSelect(e)}
            />
            <label htmlFor="tab3" className={styles.tab}>카레라이스</label>
            <div
                className={styles.slider}
                style={{transform: move}}
            />
        </div>
    );
}

export default Tab;