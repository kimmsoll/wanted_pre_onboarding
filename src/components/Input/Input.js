import { useState } from 'react'
import styles from './input.module.scss'

function Input() {
  const [emailValue, setEmailValue] = useState('')
  const [activeBorder, setActiveBorder] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleCorrect = (e) => {
    const { currentTarget : {value} } = e
    setEmailValue(value)
    const re = /^[a-z0-9]([\w._-])([a-z0-9])+([\w._-])+@([a-z0-9]+\.)+[a-z0-9]{2,8}$/i
    if (re.test(emailValue)) {
      setIsCorrect(true)
    } else setIsCorrect(false)
  }

  const handleTogglePassword = () => {
    setIsVisible((state) => !state)
  }

  const handleActiveBorder = (e) => {
    if (e.type === 'focus') {
      setActiveBorder(true)
    } else setActiveBorder(false)
  }

  return (
    <div className={styles.input}>
      <div className={styles.emailForm}>
        <label htmlFor="email" className={styles.label}>E-mail</label>
        <input
          type="email"
          id="email"
          className={styles.form}
          placeholder="E-mail"
          value={emailValue}
          onChange={handleCorrect}
          onFocus={handleActiveBorder}
          onBlur={handleActiveBorder}
        />
        {!isCorrect || emailValue === '' ?
          <button className={`${styles.checkBtn} ${styles.notOkay}`} aria-label="checkBtn" type="button" />
          : 
          <button className={`${styles.checkBtn} ${styles.okay}`} aria-label="checkBtn" type="button" />
        }
        {!isCorrect && !activeBorder && emailValue !== '' &&
          <span className={styles.incorrect}>Invalid email address.</span>
        }
      </div>
      <div className={styles.passwordForm}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type={isVisible ? "text" : "password"}
          id="password"
          className={styles.form}
          placeholder="Password"
        />
        <button
          className={isVisible ? `${styles.viewBtn} ${styles.eye}` : `${styles.viewBtn} ${styles.closedEye}`}
          onClick={handleTogglePassword}
          aria-label="passwordToggleBtn"
          type="button"
        />
      </div>
    </div>
  )
}

export default Input
