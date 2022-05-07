import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './slider.module.scss'

function Slider({ steps }) {
  const [isSelected, setIsSelected] = useState(1)

  const handleChange = (e) => {
    const { currentTarget : {value} } = e
    setIsSelected(value)
  }
  
  const handleClick = (e) => {
    const { currentTarget : { dataset : {step} } } = e
    setIsSelected(step)
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
        {steps.map((v) => {
          const { id, step } = v
          return (isSelected >= step ?
          <div key={id} className={`${styles.dot} ${styles.colored}`} />
          : <div key={id} className={styles.dot} />)
        })}
        </div>
      </div>
      <ul className={styles.valueStep}>
        {steps.map((v) => {
          const { id, step } = v
          return (<li
          key={id}
          className={styles.step}
          onClick={handleClick}
          role="presentation"
          data-step={step}
          >{step}%</li>)
        })}
      </ul>
    </div>
  )
}

Slider.propTypes = {
  steps : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      step: PropTypes.number.isRequired
    })
  )
}

export default Slider
