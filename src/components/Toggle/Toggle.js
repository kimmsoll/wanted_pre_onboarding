import { useState } from 'react'
import styles from './toggle.module.scss'

function Toggle() {
  const [isChecked, setIsChecked] = useState(false)
  
  const handleToggle = () => {
    setIsChecked((state) => !state)
  }
  
  return (
    <div className={styles.toggle}>
      <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          checked={isChecked}
          className={styles.toggleCheckbox}
          onChange={handleToggle}
        />
        <div className={styles.ball} />
        <div className={styles.toggleTexts}>
          <span
            style={{ color: isChecked ? 'gray' : 'black' }}
            className={styles.defaultMode}
          >기본</span>
          <span
            style={{ color: isChecked ? 'black' : 'gray'}}
            className={styles.detailMode}
          >상세</span>
        </div>
      </label>
    </div>
  )
}

export default Toggle
