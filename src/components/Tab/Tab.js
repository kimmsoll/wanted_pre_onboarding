import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './tab.module.scss'

const DISTANCE = 150

function Tab({ menus }) {
  const [move, setMove] = useState('translateX(0)')

  const handleSelect = (e) => {
    const { currentTarget: { id } } = e
    setMove(`translateX(${(id-1) * DISTANCE}px)`)
  }
  
  return (
    <div className={styles.tabs}>
    {menus.map((menu) => {
      const { id, title } = menu
      return (
      <div key={id}>
        <input
          id={id}
          type="radio"
          name="tab"
          className={styles.radioTab}
          onChange={handleSelect}
        />
        <label htmlFor={id} className={styles.tab}>{title}</label>
      </div>)
    })}
    <div
      className={styles.slider}
      style={{transform: move}}
    />
    </div>
  )
}

Tab.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}

export default Tab
