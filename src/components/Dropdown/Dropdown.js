import React, { useState } from 'react';
import styles from './dropdown.module.scss';

const Dropdown = ({ searchData }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isSelected, setIsSelected] = useState('All Symbols');
    const [isSearched, setIsSearched] = useState('');

    const handleClick = () => {
        setIsClicked((isClicked) => !isClicked);
    }
    const handleSelect = (e) => {
        setIsSelected(() => e.target.innerText);
        setIsClicked(false);
        setIsSearched(() => '');
    }
    const handleSearch = (e) => {
        setIsSearched(() => e.target.value);
    }
    
    return (
        <div className={styles.dropDown} id="dropDown">
            <div className={styles.select} onClick={() => handleClick()}>
                <span>{isSelected}</span>
                <button className={styles.selectBtn}></button>
            </div>
            {isClicked &&
            <div className={styles.options}>
                <div className={styles.search}>
                    <input
                        type="search"
                        className={styles.searchInput}
                        placeholder="Search Symbol"
                        value={isSearched}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button className={styles.searchIcon} />
                </div>
                <ul className={styles.optionList}>
                    {isSearched !== '' && isClicked ?
                    searchData.filter((v, idx) =>
                    new RegExp(isSearched, 'gi').test(v) &&
                    <li
                        key={idx}
                        className={styles.option}
                        onClick={(e) => handleSelect(e)}
                    >{v}</li>
                    )
                    :
                    searchData.map((v, idx) =>
                    <li
                        key={idx}
                        className={styles.option}
                        onClick={(e) => handleSelect(e)}
                    >{v}</li>
                    )
                    }
                </ul>
            </div>
            }
        </div>
    );
}

export default Dropdown;