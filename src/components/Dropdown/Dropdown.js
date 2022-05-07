import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.scss'

function Dropdown({ searchData }) {
  const [isClicked, setIsClicked] = useState(false)
  const [isSelected, setIsSelected] = useState('All Symbols')
  const [isSearched, setIsSearched] = useState('')  

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked)
  }
  
  const handleSelect = (e) => {
    const { currentTarget : {innerText} } = e
    setIsSelected(innerText)
    setIsClicked(false)
    setIsSearched('')
  }
  
  const handleSearch = (e) => {
    const { currentTarget : {value} } = e
    setIsSearched(value)
  }
  
  return (
    <div className={styles.dropDown} id="dropDown">
      <div className={styles.select} onClick={handleClick} aria-hidden="true">
        <span>{isSelected}</span>
        <button className={styles.selectBtn} aria-label="selectBtn" type="button" />
      </div>
      {isClicked &&
      <div className={styles.options}>
        <div className={styles.search}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search Symbol"
            value={isSearched}
            onChange={handleSearch}
          />
          <button className={styles.searchIcon} aria-label="searchBtn" type="button" />
        </div>
        <ul className={styles.optionList}>
        {searchData.map((v) => {
          const { id, text } = v
          const matched = isSearched !== '' && isClicked ?
          new RegExp(isSearched, 'gi').test(text) : true
          return matched &&
            (<li
              key={id}
              className={styles.option}
              onClick={handleSelect}
              role="presentation"
            >{text}</li>)
          })
        }
        </ul>
      </div>
      }
    </div>
  )
}

Dropdown.propTypes = {
  searchData: PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default Dropdown
